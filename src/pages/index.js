import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import "@fontsource/amiko"
import Header from "../components/Header/Header"
import Layout from "../components/Layout/Layout"
import Weather from "../components/Weather/Weather"

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
      <Header title="Matt Loniero" description="Web Developer in Los Angeles." />
      <Weather />
    </Layout>
  )
}



export default IndexPage
