import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"

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

const Posts = ({ data }) => {
    return(
        <Layout pageTitle="Posts Page">
            <Header title={pageTitle} description={pageDescription} />
            <ul>
            {
                data.allWpPost.nodes.map(node=> (
                    <li key={node.id}>
                        <p><strong>{node.slug}</strong></p>
                        <h2><Link to={`/${node.slug}`}>{node.title}</Link></h2>
                        <div dangerouslySetInnerHTML={{ __html: node.content }} />
                    </li>
                ))
            }
            </ul>
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
        </Layout>
    )
}

export const query = graphql`
    query WpPosts {
        allWpPost {
            nodes {
                id
                slug
                title
                content
            }
        }
    }
`

export default Posts