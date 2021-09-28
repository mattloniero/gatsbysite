import React, {useEffect, useState} from 'react';
import fetch from "node-fetch";
import CryptoResponse from "./CryptoResponse"

const Crypto = (props) => {
    let [responseObj, setResponseObj] = useState({});
    useEffect(() => {
        if ( Object.entries(responseObj).length === 0 ) { 
            fetch(props.apiUrl, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                    "x-rapidapi-key": "9445d8809dmsh3dd64d168da9a7ep12b8e2jsn5ee4c33053b1"
                }
            })
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
            })
            .catch(err => {
                console.error(err);
            });
        }
    })
    return(
        <div>
            <CryptoResponse responseObj={responseObj} />
        </div>
    )
}

export default Crypto;