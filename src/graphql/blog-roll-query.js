exports.queryBlogRoll = function (graphql, skip, limit) {
    return graphql(blogRollQuery, {skip, limit})
}

const blogRollQuery = `
  query BlogRollQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter:{frontmatter:{published:{ne:false}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            category
            title
            date(formatString: "MMMM Do YYYY")
            author
            tags
            image {
            absolutePath
              childImageSharp {
                  original{
                    src
                  }
                fluid(maxWidth: 650, maxHeight: 371) {
                    src
                    srcSet
                    aspectRatio
                    sizes
                    base64                  
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
