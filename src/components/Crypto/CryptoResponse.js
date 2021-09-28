import React from 'react';
import './crypto.scss';

const CryptoResponse = (props) => {
    console.log(props.responseObj);
    return (
        <>
            {props.responseObj.status === "success" ?
                <div className="crypto-section" id={props.responseObj.data.coin.slug}>
                    {/*
                        props.responseObj.data.coin.websiteUrl ? <a href={props.responseObj.data.coin.websiteUrl}>
                            <img
                                alt={props.responseObj.data.coin.name}
                                src={props.responseObj.data.coin.iconUrl}
                                width="24"
                            />
                        </a> : null
                    */}
                    <h3>{props.responseObj.data.coin.symbol}</h3>
                    <p>${Number(props.responseObj.data.coin.price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </div>
            : null
            }
        </>
    )
}

export default CryptoResponse ;