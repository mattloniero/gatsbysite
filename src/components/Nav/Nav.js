import * as React from "react"
import { Link } from "gatsby"
import "./nav.scss"

const Nav = () => {
    return(
        <nav className="site-navigation">
            <div className="site-title">
            <Link to="/">Matt Loniero</Link>
            </div>
            <ul>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/about">Skills</Link></li>
            </ul>
        </nav>
    )
}

export default Nav