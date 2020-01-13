import React from "react";
import Layout from "../components/layout";
import { Post } from "../@types/posts";
import PaginationLinks from "../components/PaginationLinks";
import { Link } from "gatsby";

export const BlogRoll = (props: any) => {
  console.log({ BlogRollProps: props });

  const { currentPage, numberOfPages, posts } = props.pageContext;

  console.log(posts.map((p: Post) => ({ ex: p.excerpt, ast: p.excerptAst })));
  return (
    <Layout pageTitle={`Robusta Code Blog  - Page: ${currentPage}`}>
      {posts.map((post: Post) => (
        <div className="post-summary">
          <h2>
            <Link to={post.frontmatter.category + "/" + post.fields.slug}>
              {post.frontmatter.title}
            </Link>
          </h2>
          {post.frontmatter.author && <h3>by Mr: {post.frontmatter.author}</h3>}
          <p>{post.excerpt}</p>
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
