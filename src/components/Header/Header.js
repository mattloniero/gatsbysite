import * as React from 'react';
import Forecast from '../Forecast/Forecast';

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            {
                props.description ? <p>{props.description}</p> : 0
            }
            <Forecast />
        </header>
    );
}

export default Header;