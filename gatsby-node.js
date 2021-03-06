const queryPosts = require("./src/robust-api/all-posts-query").queryPosts;

const path = require("path");
const { slugify } = require("./src/util/utilityFunctions");

const _ = require("lodash");

//const queryBlogRoll = require("./src/robust-api/blog-roll-query").queryBlogRoll;

const config = {
  blogRollSize: 4
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slugFromTitle = slugify(node.frontmatter.title);
    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Page templates
  const templates = {
    post: path.resolve("src/templates/single-post.js"),
    blogRoll: path.resolve("src/templates/post-roll.js")
  };

  let posts = await queryPosts(graphql);

  // Create single post pages
  posts.forEach(post => {
    const postObject = {
      path: post.frontmatter.category + "/" + post.fields.slug,
      component: templates.post,
      context: {
        // Passing slug for template to use to fetch the post
        slug: post.fields.slug,
        post
      }
    };
    createPage(postObject);
  });

  // Create posts pagination pages
  const postsPerPage = config.blogRollSize;
  const numberOfPages = Math.ceil(posts.length / postsPerPage);

  // Create excerpt
  posts = posts.map(p => ({ ...p, excerpt: findExcerpt(p) }));

  // skipping first page, with index === 0
  for (let index = 0; index < numberOfPages; index++) {
    const currentPage = index + 1;
    const skip = postsPerPage * index;
    const postsInPage = posts.slice(skip, skip + postsPerPage);

    const path = index === 0 ? "/blog" : `/blog/page/${currentPage}`;

    createPage({
      path,
      component: templates.blogRoll,
      context: {
        index,
        limit: postsPerPage,
        skip: index * postsPerPage,
        numberOfPages,
        currentPage,
        posts: postsInPage
      }
    });
  }

  // Get all tags
  const { tags, tagPostCounts } = findTags(posts);
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
};

// Todo : externalize and optimize with a single reduce
function findTags(posts) {
  // Get all tags
  let tags = [];
  _.each(posts, edge => {
    if (_.get(edge, "node.frontmatter.tags")) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });

  let tagPostCounts = {}; // { tutorial: 2, design: 1}
  tags.forEach(tag => {
    // Or 0 cause it might not exist yet
    tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
  });

  // Remove duplicates
  tags = _.uniq(tags);
  return { tags, tagPostCounts };
}

/**
 * Encapsulated in a function because there is a bug. Might be fixed.
 * https://github.com/gatsbyjs/gatsby/pull/14723
 * @param node
 * @returns {string}
 */
function findExcerpt(node) {
  try {
    const value = node.excerptAst.children[0].children[0].value;
    return typeof value === "string" ? value : "";
  } catch (e) {
    return "no Excerpt";
  }
}
