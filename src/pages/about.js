import * as React from "react"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"

const pageTitle = `About Matt Loniero`
const pageDescription = `Matt Loniero is a front-end web developer in Los Angeles`

const About = () => {
    return(
        <Layout pageTitle="About Matt Loniero">
            <header>
                <Header title={pageTitle} description={pageDescription} />
            </header>
        </Layout>
    )
}

export default About;