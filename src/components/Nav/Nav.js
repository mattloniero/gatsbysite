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
                <li><Link to="/about">Work</Link></li>
                <li><Link to="/posts">Skills</Link></li>
            </ul>
        </nav>
    )
}

export default Nav