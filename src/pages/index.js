import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import "@fontsource/amiko"
import Header from "../components/Header/Header"
import Layout from "../components/Layout/Layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout pageTitle={ data.site.siteMetadata.title }>
      <Header title="Testing" description="This is a test." />
    </Layout>
  )
}



export default IndexPage
