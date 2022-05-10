import React from 'react';
import './Scroll.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { gsap } from 'gsap';
const { useEffect, useRef } = React;

const Scroll = ({ Target }) => {
    let el = useRef();
    let q = gsap.utils.selector(el);

    useEffect(() => {
        // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
        gsap.fromTo(
            '#Scroll',
            {},
            { y: 50, duration: 1, repeat: -1, yoyo: true },
        );
    }, []);
    return (
        <div id='Scroll' ref={el}>
            <div id='Scroll--Div'>
                <a href={Target}>
                    <KeyboardArrowDownIcon id='Scroll--img' />
                </a>
            </div>
        </div>
    );
};

export default Scroll;
