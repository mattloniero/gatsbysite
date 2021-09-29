import React, { useEffect, useState} from 'react';

function CityInput(props) {
    let [newCity, setNewCity] = useState('');
    {/* 
        Need to store custom input from props as new state
        to save custom input on switch.
    */}
    const submitCity = (e) => {
        e.preventDefault()
        console.log(e)
        props.onSubmit(e)
    }
    const restoreDefault = (e) => {
        e.preventDefault();
        setNewCity('Westlake Village');
        document.getElementById('customCity').submit()
    }
    return (
        <>
            <form id="customCity" onSubmit={submitCity}>
                <label htmlFor="cityInput">What city do you live in?</label>
                <input 
                    id="cityInput" 
                    type="text" 
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                /> 
                <input type="submit" value="Submit" />
            </form>
            <button onClick={restoreDefault}>Reset Everything</button>
        </>
    )
}

export default CityInput