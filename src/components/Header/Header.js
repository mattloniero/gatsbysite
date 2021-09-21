import * as React from 'react';

const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const paragraphStyles = {
    marginBottom: 48,
}

const Header = () => {
    return (
        <header>
            <h1 style={headingStyles}>
            Matt Loniero
            </h1>
            <p style={paragraphStyles}>
            This is the website built by Matt Loniero using Gatsby with React.
            </p>
        </header>
    );
}

export default Header;