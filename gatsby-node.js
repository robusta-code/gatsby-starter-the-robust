const findAuthor  = require("./src/util/authors").findAuthor;

const path = require('path')
const {slugify} = require('./src/util/utilityFunctions')

const _ = require('lodash')

const queryBlogRoll = require('./src/graphql/blog-roll-query').queryBlogRoll

const config = {
    blogRollSize:4
};

exports.onCreateNode = ({node, actions}) => {
    const {createNodeField} = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle,
        })
    }
}

exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions

    // Page templates
    const templates = {
        //post: path.resolve('src/templates/single-post.js'),
        blogRoll: path.resolve('src/templates/BlogRoll.js')
    }

    console.log({blogRoll:templates.blogRoll});
    const res = await graphql(`
    {
      allMarkdownRemark(filter:{frontmatter:{published:{ne:false}}}) {
        edges {
          node {
            frontmatter {
              author
              tags
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

    if (res.errors) return Promise.reject(res.errors)

    // Extracting all posts from res
    let posts = res.data.allMarkdownRemark.edges;


    // Create single post pages
   /* posts.forEach(({node}) => {
        createPage({
            path: node.frontmatter.category + '/' + node.fields.slug,
            component: templates.post,
            context: {
                // Passing slug for template to use to fetch the post
                slug: node.fields.slug,
                // Find author imageUrl from author array and pass it to template
                imageUrl: findAuthor(node.frontmatter.author).imageUrl,
            },
        })
    })
*/
    // Create posts pagination pages
    const postsPerPage = config.blogRollSize
    const numberOfPages = Math.ceil(posts.length / postsPerPage)




    // skipping first page, with index === 0
    for (let index = 0; index < numberOfPages; index++) {
        const currentPage = index+1;
        const skip = postsPerPage*index
        const blogRoll = await queryBlogRoll(graphql, skip, postsPerPage)

        const path = index === 0 ? '/blog' : `/blog/page/${currentPage}`;
        console.log({index, skip, blogRoll });

        createPage({
            path,
            component: templates.blogRoll,
            context: {
                index,
                limit: postsPerPage,
                skip: index * postsPerPage,
                numberOfPages,
                currentPage,
                posts:blogRoll.data.allMarkdownRemark.edges
            },
        })
    }


    // Get all tags
    const {tags, tagPostCounts}= findTags(posts);
/*
    // Tags page (all tags)
    createPage({
        path: '/tags',
        component: templates.tagsPage,
        context: {
            tags,
            tagPostCounts,
        },
    })

    // Tag posts pages
    tags.forEach(tag => {
        createPage({
            path: `/tags/${_.kebabCase(tag)}`,
            component: templates.tag,
            context: {
                tag,
            },
        })
    })
*/
}



// Todo : externalize and optimize with a single reduce
function findTags(posts){
    // Get all tags
    let tags = []
    _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags)
        }
    })

    let tagPostCounts = {} // { tutorial: 2, design: 1}
    tags.forEach(tag => {
        // Or 0 cause it might not exist yet
        tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })

    // Remove duplicates
    tags = _.uniq(tags)
    return {tags, tagPostCounts};
}