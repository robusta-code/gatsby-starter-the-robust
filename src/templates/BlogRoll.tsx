import React from "react";
import Layout from "../components/layout";


type Post ={
    node: any
}

export const BlogRoll = (props:any) => {

    console.log({BlogRollProps:props});

    const posts = props.pageContext.posts
    const { currentPage, numberOfPages } = props.pageContext

    return (
        <Layout pageTitle={`Robusta Code Blog  - Page: ${currentPage}`}>

            {posts.map(({ node }:Post) => (
                <div>
                    <h2>{node.frontmatter.title}</h2>
                    <h3>by Mr: {node.frontmatter.author}</h3>
                </div>
            ))}
        </Layout>
    )
}



export default BlogRoll;