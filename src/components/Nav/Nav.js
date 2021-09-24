import * as React from "react"
import { Link } from "gatsby"
import "./nav.scss"

const Nav = () => {
    return(
        <nav className="site-navigation">
            <div className="site-title">
                Matt Loniero
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
        </nav>
    )
}

export default Nav