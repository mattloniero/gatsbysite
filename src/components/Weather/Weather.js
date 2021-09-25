import React, {useState} from 'react';
import Conditions from '../Conditions/Conditions';

const Weather = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('Westlake Village');
    let [unit, setUnit] = useState('imperial');
    const uriEncodedCity = encodeURIComponent(city);
    function getForecast() {
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
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
    if (Object.entries(responseObj).length === 0) {
        getForecast()
    }
    return(
        <div>
            <Conditions responseObj={responseObj} />
        </div>
    )
}

export default Weather;