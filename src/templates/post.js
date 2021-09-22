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
            <h1>{title}</h1>
            
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