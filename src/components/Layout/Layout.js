import * as React from "react"
import Nav from "../Nav/Nav"
import Main from "../Main/Main"
import Sidebar from "../Sidebar/Sidebar"
import "./layout.scss"

const Layout = ({pageTitle, children}) => {
    return(
        <div className="layout">
            <title>{pageTitle}</title>
            <Nav />
            <main>
                <Main>{children}</Main>
                <Sidebar />
            </main>
        </div>
    )
}

export default Layout