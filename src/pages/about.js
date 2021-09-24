import * as React from "react"
import Layout from "../components/Layout/Layout"
import { StaticImage } from 'gatsby-plugin-image'
import Header from "../components/Header/Header"

const pageTitle = `About Matt Loniero`
const pageDescription = `Matt Loniero is a front-end web developer in Los Angeles`

const About = () => {
    return(
        <Layout pageTitle="About Matt Loniero">
            <header>
                <Header title={pageTitle} description={pageDescription} />
                <StaticImage
                    alt="Modern Vascular"
                    src="https://modernvascular.com/wp-content/images/core-values_290x290.png"
                />
            </header>
        </Layout>
    )
}

export default About;