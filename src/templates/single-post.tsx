import React from "react";
import Layout from "../components/layout";

import Img from "gatsby-image";
import { slugify } from "../util/utilityFunctions";
import { Link } from "gatsby";
import { Post } from "../@types/posts";

type Props = {
  data: any;
  pageContext: {
    post: Post;
    slug: string;
  };
  location: string;
};
export const SinglePost = ({ pageContext, location }: Props) => {
  const post = pageContext.post;
  console.log(post);

  return (
    <Layout
      pageTitle={post.frontmatter.title}
      postAuthor={post.frontmatter.author}
    >
      <article>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid}/>

        <section>
          <span className="text-info">{post.frontmatter.date}</span> by{" "}
          <span className="text-info">{post.frontmatter.author}</span>
        </section>
        <div dangerouslySetInnerHTML={{ __html: post.html }}/>
        <section className="list-tags">
          {post.frontmatter.tags.map(
            (tag: string, index: number, array: string[]) => (
              <Link to={`/tags/${slugify(tag)}`} key={tag}>
                {tag} {index < array.length - 1 ? ", " : ""}
              </Link>
            )
          )}
        </section>
      </article>

      <h4 className="text-center">Share this post</h4>
    </Layout>
  );
};

export default SinglePost;
