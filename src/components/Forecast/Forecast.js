import React, {useState} from 'react';
import Conditions from '../Conditions/Conditions';
import './forecast.scss';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    const uriEncodedCity = encodeURIComponent(city);
    function getForecast(e) {
        e.preventDefault();
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
    return(
        <div>
            <h2 className="weather-title">Check the weather.</h2>
            <form onSubmit={getForecast}>
                <input 
                    className="text-input"
                    type="text"
                    placeholder="Enter City"
                    maxLength="64"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <div className="radios">
                    <label>
                        <input
                        className="radio"
                            type="radio"
                            name="units"
                            checked={unit === 'imperial'}
                            value="imperial"
                            onChange={(e) => setUnit(e.target.value)}
                        />
                        Farenheit
                    </label>
                    <label>
                        <input
                        className="radio"
                            type="radio"
                            name="units"
                            checked={unit === 'metric'}
                            value="metric"
                            onChange={(e) => setUnit(e.target.value)}
                        />
                        Celsius
                    </label>
                </div>
                <button className="button" type="submit">Get Forecast</button>
            </form>
            <Conditions responseObj={responseObj} />
        </div>
    )
}

export default Forecast;