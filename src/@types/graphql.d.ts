import { Post } from "./posts";

declare type graphQlHandler<T> = (query: string, params?: any) => Promise<T>;

type Edge = {
  node: Post;
};
interface AllMarkdownRemarks {
  data: {
    allMarkdownRemark: {
      edges: Edge[];
    };
  };
}
