import React from 'react';

const Conditions = (props) => {
    console.log(props.responseObj)
    return (
        <div>
            {props.responseObj.cod === 200 ?
                <div>
                    <p><strong>This is  the weather where I am at:</strong></p>
                    <p>It's {Math.round(props.responseObj.main.temp)}&deg; with {props.responseObj.weather[0].description}. It feels like {Math.round(props.responseObj.main.feels_like)}&deg; and the humidity level is {props.responseObj.main.humidity}%.</p>
                </div>
            : null
            }
        </div>
    )
}

export default Conditions;