import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import "./grid.scss"

const Grid = () => {
    return (
        <div className="grid">
            <div id="projects">
                <div className="grid-item">
                    <StaticImage 
                        src="../images/web-development.png"
                        alt="Web Development" 
                        width={128}
                        height={128}
                        className="grid-item--image"
                    />
                    <div class="grid-item--body">
                        <h2><Link to="/about" className="grid-item--link">Projects</Link></h2>
                    </div>
                </div>
            </div>
            <div id="skills"></div>
            <div id="graphic"></div>
            <div id="audio"></div>
        </div>
    )
}

export default Grid