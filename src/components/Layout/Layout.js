import * as React from "react"
import Nav from "../Nav/Nav"

const Layout = ({pageTitle, children}) => {
    return(
        <div className="layout">
            <title>{pageTitle}</title>
            <Nav />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout