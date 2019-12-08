import React from 'react';

import logo from '../../assets/icons/logo.svg';

import './style.scss';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hi! This React App has been setup from scratch using Webpack &amp; Babel.
                </p>
                <a
                    className="App-link"
                    href="https://github.com/vinaysharma14/react-from-scratch"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Check my repository!
                </a>
            </header>
        </div>
    );
}

export default App;
