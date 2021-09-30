import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Crypto from "../Crypto/Crypto"
import "./sidebar.scss"

const Sidebar = () => {
    return(
        <div className="site-sidebar">
            <aside className="side-card text-center">
              <h3>Cryptocurrency</h3>
              <p><small>Current Prices</small></p>
              <div class="row-2">
                <Crypto apiUrl="https://coinranking1.p.rapidapi.com/coin/1" />
                <Crypto apiUrl="https://coinranking1.p.rapidapi.com/coin/2" />
                <Crypto apiUrl="https://coinranking1.p.rapidapi.com/coin/71983" />
                <Crypto apiUrl="https://coinranking1.p.rapidapi.com/coin/12606" />
              </div>
            </aside>
            <figure>
              <StaticImage
                alt="Succulents"
                src="https://mattloniero.com/wp-content/uploads/2021/09/succulents.png"
              />
              <figcaption><p className="text-center">Illustration by Matt Loniero.</p></figcaption>
            </figure>
        </div>
    )
}

export default Sidebar