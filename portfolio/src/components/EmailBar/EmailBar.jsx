import './EmailBar.css';
import { gsap } from 'gsap';
import React from 'react';
const { useEffect, useRef } = React;

const EmailBar = () => {
    let el = useRef();
    let q = gsap.utils.selector(el);

    useEffect(() => {
        // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
        gsap.fromTo(
            q('*'),
            { x: '100vh', opacity: 0 },
            {
                x: 0,
                opacity: 1,
                delay: 2.6,
            },
        );
    }, []);
    return (
        <div id='EmailBar' ref={el}>
            <a
                href='mailto:Ulvesten@icloud.com?subject=Get in Touch!'
                id='EmailBar--Text--A'
            >
                <p class='EmailBar--Lines'> - - - </p>
                <p id='EmailBar--Text'> Ulvesten@Icloud.com </p>
                <p class='EmailBar--Lines'> - - - </p>
            </a>
        </div>
    );
};

export default EmailBar;
