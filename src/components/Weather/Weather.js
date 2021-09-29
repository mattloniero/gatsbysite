import React, {useEffect, useState} from 'react';
import fetch from "node-fetch";
import Conditions from '../Conditions/Conditions';
import CityInput from '../Weather/CityInput';
import "./weather.scss"

const Weather = () => {
    const [responseObj, setResponseObj] = useState({})
    const [city, setCity] = useState('')
    const [customCity, setCustomCity] = useState('')
    const [showCityInput, setShowCityInput] = React.useState(false)
    const [message, setMessage] = React.useState('Check the weather where you live.')
    const [greeting, setGreeting] = React.useState('This is  the weather where I am at:')
    const handleClick = () => {
        setShowCityInput(!showCityInput);
        if (!showCityInput) {
            setCity(customCity);
            setMessage('Show the weather where I am.')
            setGreeting('This is the weather where you are at:')
        } else { 
            setCustomCity(city)
            setMessage('Check the weather where you live.')
            setGreeting('This is the weather where I am at:')
            setCity('Westlake Village')
        }
    }
    const handleInput = (e) => {
        setCity(e.target[0].value)
    }
    const getForecast = () => {
        let uriCity = encodeURI(city);
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=imperial&q=${uriCity}`, {
	        "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
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
    useEffect(() => {
        getForecast()
    }, [city])
    if(!city) {
        setCity('Westlake Village')
    }
    return(
        <div>
            <Conditions weatherGreeting={greeting} responseObj={responseObj} />
            <button class="weather-button" onClick={handleClick}>{message}</button>
            {showCityInput && (
                <CityInput city={city} onSubmit={handleInput} />
            )}
        </div>
    )
}

export default Weather;