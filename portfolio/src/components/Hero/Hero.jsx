import React from 'react';
import './Hero.css';
import Button from '@mui/material/Button';
import { gsap } from 'gsap';
const { useEffect, useRef } = React;

function Hero() {
    let el = useRef();
    let q = gsap.utils.selector(el);

    useEffect(() => {
        // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
        gsap.fromTo(
            q('*'),
            { y: '-100vh', opacity: 0 },
            {
                y: 0,
                stagger: 0.2,
                opacity: 1,
                delay: 1,
            },
        );
    }, []);
    return (
        <div id='Hero' ref={el}>
            <div ref={el}>
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
                <p id='Hero--Bread' ref={el}>
                    I’m a web developer specializing in building & <br />
                    designing digital experiences.
                </p>
            </div>
        </div>
    );
}

export default Hero;
