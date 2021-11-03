import * as React from "react"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import Weather from "../components/Weather/Weather"
import Smile from "../components/Smile/Smile"
import News from "../components/News/News"

const pageTitle = `These are the things I can do.`
const pageDescription = `Finding ways to do new things by learning new skills.`

const About = () => {
    return(
        <Layout pageTitle="About Matt Loniero">
            <Header title={pageTitle} description={pageDescription} />
            <Weather />
            <h2>What's happening around the web?</h2>
            <div className="row-3">
                <Smile />
                <News />
            </div>
        </Layout>
    )
}

export default About;