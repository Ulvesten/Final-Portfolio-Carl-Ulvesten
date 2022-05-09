import React from 'react';
import './Hero.css';
import Button from '@mui/material/Button';

function Hero() {
    return (
        <div id='Hero'>
            <div>
                <p id='Hero--Greet'>
                    <span id='Hero--Greet--Span'>Hi,</span> my name is{' '}
                </p>
                <h1 id='Hero--Title'>
                    CARL ULVESTEN.
                    <span id='Hero--Title--Span'>
                        <br />
                        I'm a Web Developer.
                    </span>
                </h1>
                <p id='Hero--Bread'>
                    I’m a web developer specializing in building & <br />
                    designing digital experiences.
                </p>
            </div>
        </div>
    );
}

export default Hero;
