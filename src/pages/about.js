import * as React from "react"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import Smile from "../components/Smile/Smile"
import News from "../components/News/News"

const pageTitle = `This is some of the work that I have done.`
const pageDescription = `Custom website development as part of a team, the leader of a team, or as an individual.`

const links = [
    {
      text: "Modern Vascular",
      url: "https://modernvascular.com",
      description: "Outpatient clinics providing minimally invasive endovascular procedures."
    },
    {
      text: "Semper Solaris",
      url: "https://sempersolaris.com",
      description: "California solar panel, roofing, heating, and air conditioning company."
    },
    {
      text: "Kevin Manthei (Composer)",
      url: "https://kevinmantheimusic.com",
      description: "Music composer for television, film, and video games."
    }
]

const About = () => {
    return(
        <Layout pageTitle="About Matt Loniero">
            <Header title={pageTitle} description={pageDescription} />
            <h2>Projects</h2>
            <ul>
                {links.map(link => (
                    <li key={link.url}>
                    <span>
                        <a
                        href={`${link.url}?utm_source=sidebar&utm_medium=website&utm_campaign=companies`}
                        >
                        {link.text}
                        </a>
                        <p>{link.description}</p>
                    </span>
                    </li>
                ))}
            </ul>
            <h2>What's happening around the web?</h2>
            <div className="row-3">
                
                <Smile />
                <News />
            </div>
        </Layout>
    )
}

export default About;