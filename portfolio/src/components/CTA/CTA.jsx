import React from 'react';
import './CTA.css';
import { Box, Button } from '@mui/material';
import { gsap } from 'gsap';
const { useEffect, useRef } = React;

function CTA({ position, padding }) {
    let el = useRef();
    let q = gsap.utils.selector(el);

    useEffect(() => {
        // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
        gsap.fromTo(
            q('*'),
            { y: '100vh', opacity: 0 },
            {
                y: 0,
                opacity: 1,
                delay: 2.4,
            },
        );
    }, []);
    return (
        <Box textAlign={position} pb={padding} ref={el} id='Box'>
            <Button
                variant='contained'
                size='large'
                onClick={() => {
                    window.location.href =
                        'mailto:Ulvesten@icloud.com?subject=Get in Touch!';
                }}
                sx={{ padding: '20px 100px' }}
            >
                Get in Touch!
            </Button>
        </Box>
        // <div>
        //     <a
        //         href='mailto:Ulvesten@icloud.com?subject=Get in Touch!'
        //         id='EmailBar--Text--A'
        //     >
        //         <button id='Hero--CTA'>Get in Touch</button>
        //     </a>
        // </div>
    );
}

export default CTA;
