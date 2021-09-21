import * as React from "react"

const Main = ({extraClasses, children}) => {
    return(
        <section className={extraClasses}>
            {children}
        </section>
    )
}

export default Main