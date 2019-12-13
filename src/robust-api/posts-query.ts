import { Post } from "../@types/posts";
import { AllMarkdownRemarks, Edge, graphQlHandler } from "../@types/graphql";

export async function queryPosts(
  graphql: graphQlHandler<AllMarkdownRemarks>
): Promise<Array<Post>> {
  return graphql(blogRollQuery, { skip: 0 })
    .then(all => {
      return all.data.allMarkdownRemark.edges;
    })
    .then(edges => edges.map((edge: Edge) => edge.node));
}

const blogRollQuery = `
  query BlogRollQuery($skip: Int!) {
    allMarkdownRemark(
        skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          html
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
`;
