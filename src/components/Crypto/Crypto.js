import React, {useState} from 'react';
import fetch from "node-fetch";
import CryptoResponse from "./CryptoResponse"

const Crypto = () => {
    let [responseObj, setResponseObj] = useState({});
    function getEth() {
        fetch("https://api.coinranking.com/v2/coin/2", {
            "method": "GET",
            "headers": {
                "x-access-token": "coinranking5e1cda3c09dd8b098d8c17a58cc0da77d87f67e3ff2279ad"
            }
        })
        .then(response => {
            console.log(response);
        })
        // .then(response => {
        //     setResponseObj(response)
        // })
        .catch(err => {
            console.error(err);
        });
    }
    if (Object.entries(responseObj).length === 0) {
        getEth();
    }
    return(
        <div id="eth">
            <CryptoResponse responseObj={responseObj} />
        </div>
    )
}

export default Crypto;