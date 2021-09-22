import * as React from "react"
import { Link } from "gatsby"
import * as ClassNames from "./Nav.module.css"

const Nav = () => {
    return(
        <nav className={ClassNames.siteNavigation}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
        </nav>
    )
}

export default Nav