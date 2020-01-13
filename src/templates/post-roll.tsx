import React from "react";
import Layout from "../components/layout";
import { Post } from "../@types/posts";
import PaginationLinks from "../components/PaginationLinks";
import { Link } from "gatsby";

export const BlogRoll = (props: any) => {
  console.log({ BlogRollProps: props });

  const { currentPage, numberOfPages, posts } = props.pageContext;

  return (
    <Layout pageTitle={`Robusta Code Blog  - Page: ${currentPage}`}>
      {posts.map((post: Post) => (
        <div>
          <h2>
            <Link to={post.frontmatter.category + "/" + post.fields.slug}>
              {post.frontmatter.title}
            </Link>
          </h2>
          <h3>by Mr: {post.frontmatter.author}</h3>
        </div>
      ))}
      <PaginationLinks
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    </Layout>
  );
};

export default BlogRoll;
