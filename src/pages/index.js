import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import "@fontsource/amiko"
import Header from "../components/Header/Header"
import Layout from "../components/Layout/Layout"
import Forecast from '../components/Forecast/Forecast';

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
      <Forecast />
    </Layout>
  )
}



export default IndexPage
