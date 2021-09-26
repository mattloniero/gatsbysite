import React from 'react';

const CryptoResponse = (props) => {
    console.log(props.responseObj)
    return (
        <div>
            {props.responseObj.cod === 200 ?
                <div>
                    <p><strong>How's Ethereum doing?:</strong></p>
                    <p>The price is &dollar;{Math.round(props.responseObj.data.coin.price)}.</p>
                    <p>What is <a href={props.responseObj.data.coin.websiteURL}>Ethereum</a>?</p>
                    {
                        props.responseObj.data.coin.description ? <p>{props.responseObj.data.coin.description}</p> : 0
                    }
                </div>
            : null
            }
        </div>
    )
}

export default CryptoResponse ;