import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"

const BlogPost = ({
    data: {
        wpPost: { title, content, id },
    },
}) => {
    return(
        <Layout pageTitle={title}>
            <h1 data-post-id={id}>{title}</h1>
            <div
                dangerouslySetInnerHTML={{__html: content}}
            />
        </Layout>
    )
}

export const pageQuery = graphql`
    query ($id: String) {
        wpPost(id: { eq: $id }) {
            id
            slug
            content
            title
            date(formatString: "MMMM DD, YYYY")
        }
    }
`

export default BlogPost