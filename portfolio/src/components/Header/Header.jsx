import React from 'react';
import './Header.css';
import { gsap } from 'gsap';
import { Box } from '@mui/material';
const { useEffect, useRef } = React;

function Header() {
    let el = useRef();
    let q = gsap.utils.selector(el);

    useEffect(() => {
        // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
        gsap.fromTo(
            q('div'),
            { y: '-10vh' },
            {
                y: 0,
                stagger: 0.2,
                opacity: 1,
            },
        );
    }, []);
    return (
        <div ref={el}>
            <div id='Header' ref={el}>
                <div id='Header-Logo'>Carl Ulvesten</div>
                <Box id='Header-SectionsDiv'>
                    <a href='#About'>
                        <div id='Header-About'>About Me</div>
                    </a>
                    <a href='#Projects'>
                        <div id='Header-Projects'>Projects</div>
                    </a>

                    <div id='Header-Resume'>
                        <a href='./assets/Resume.pdf' target='_blank'>
                            <button>Resume</button>
                        </a>
                    </div>
                </Box>
            </div>
        </div>
    );
}

export default Header;
