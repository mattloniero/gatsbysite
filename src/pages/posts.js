import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"

const Posts = ({ data }) => {
    return(
        <Layout pageTitle="Posts Page">
            <ul>
            {
                data.allWpPost.nodes.map(node=> (
                    <li key={node.id}>
                        <p><strong>{node.slug}</strong></p>
                        <h2>{node.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: node.content }} />
                    </li>
                ))
            }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query WpPosts {
        allWpPost {
            nodes {
                id
                slug
                title
                content
            }
        }
    }
`

export default Posts