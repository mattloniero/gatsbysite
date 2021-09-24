import * as React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            {
                props.description ? <p>{props.description}</p> : 0
            }
        </header>
    );
}

export default Header;