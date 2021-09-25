import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Weather from "../Weather/Weather"
import "./sidebar.scss"

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

const Sidebar = () => {
    return(
        <aside className="site-sidebar">
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
            <Weather />
            <figure>
              <StaticImage
                alt="Succulents"
                src="https://mattloniero.com/wp-content/uploads/2021/09/succulents.png"
              />
              <figcaption>Illustration by Matt Loniero.</figcaption>
            </figure>
        </aside>
    )
}

export default Sidebar