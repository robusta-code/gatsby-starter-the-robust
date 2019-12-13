import React from "react";
import Layout from "../components/layout";
import {Post} from "../@types/posts";




export const BlogRoll = (props:any) => {

    console.log({BlogRollProps:props});


    const { currentPage, numberOfPages, posts } = props.pageContext

    return (
        <Layout pageTitle={`Robusta Code Blog  - Page: ${currentPage}`}>

            {posts.map( ( post :Post) => (
                <div>
                    <h2>{post.frontmatter.title}</h2>
                    <h3>by Mr: {post.frontmatter.author}</h3>
                </div>
            ))}
        </Layout>
    )
}



export default BlogRoll;