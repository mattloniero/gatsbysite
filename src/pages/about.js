import * as React from "react"
import Layout from "../components/Layout/Layout"
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
    return(
        <Layout pageTitle="About Matt Loniero">
            <header>
                <h1>About Matt Loniero</h1>
                <p>Matt Loniero is a front-end web developer in Los Angeles.</p>
                <StaticImage
                    alt="Modern Vascular"
                    src="https://modernvascular.com/wp-content/images/core-values_290x290.png"
                />
            </header>
        </Layout>
    )
}

export default About;