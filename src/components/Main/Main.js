import * as React from "react"

const Main = ({extraClasses, children}) => {
    return(
        <section className="site-content">
            {children}
        </section>
    )
}

export default Main