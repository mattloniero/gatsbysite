import * as React from "react"
import Nav from "../Nav/Nav"
import Main from "../Main/Main"
import Sidebar from "../Sidebar/Sidebar"
import * as ClassNames from "./Layout.module.css"

const Layout = ({pageTitle, children}) => {
    return(
        <div className={ClassNames.layout}>
            <title>{pageTitle}</title>
            <Nav />
            <main className={ClassNames.main}>
                <Main>{children}</Main>
                <Sidebar />
            </main>
        </div>
    )
}

export default Layout