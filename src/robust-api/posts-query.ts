import { Post } from "../@types/posts";
import { AllMarkdownRemarks, Edge, graphQlHandler } from "../@types/graphql";

export async function queryPosts(
  graphql: graphQlHandler<AllMarkdownRemarks>
): Promise<Array<Post>> {
  return graphql(allPostsQuery)
    .then(all => {
      return all.data.allMarkdownRemark.edges;
    })
    .then(edges => edges.map((edge: Edge) => edge.node));
}

const allPostsQuery = `
  query allPostsQuery {
  allMarkdownRemark(skip: 0, sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        id
        html
        frontmatter {
          category
          title
          date(formatString: "MMMM Do YYYY")
          tags
          author
          image {
            absolutePath
            childImageSharp {
              original {
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
