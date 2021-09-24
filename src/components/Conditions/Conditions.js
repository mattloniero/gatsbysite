import React from 'react';

const Conditions = (props) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
                <div>
                    <h2>{props.responseObj.name}</h2>
                    <p>It's {Math.round(props.responseObj.main.temp)} degrees with {props.responseObj.weather[0].description}</p>
                </div>
            : null
            }
        </div>
    )
}

export default Conditions;