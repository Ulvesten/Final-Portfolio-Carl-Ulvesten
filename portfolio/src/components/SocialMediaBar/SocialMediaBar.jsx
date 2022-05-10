import './SocialMediaBar.css';
import { Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { gsap } from 'gsap';
import React from 'react';
const { useEffect, useRef } = React;

const SocialMediaBar = () => {
    let el = useRef();
    let q = gsap.utils.selector(el);

    useEffect(() => {
        // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
        gsap.fromTo(
            q('*'),
            { x: '-100vh', opacity: 0 },
            {
                x: 0,
                opacity: 1,
                delay: 2.6,
            },
        );
    }, []);
    return (
        <div id='SocialMediaBar' ref={el}>
            <Stack spacing={1}>
                <p id='SocialMediaBar--Lines'>- - - </p>
                <IconButton disableRipple='false' onClick={() => {}}>
                    <a href='https://www.linkedin.com/in/carl-ulvesten-808111238/'>
                        <LinkedInIcon
                            sx={{ color: '#a8b2d1' }}
                            id='SocialMediaBar--Linkin'
                        />
                    </a>
                </IconButton>
                <p id='SocialMediaBar--Lines'>- - - </p>
                <IconButton disableRipple='false' onClick={() => {}}>
                    <a href='https://github.com/Ulvesten'>
                        <GitHubIcon
                            sx={{ color: '#a8b2d1' }}
                            id='SocialMediaBar--GitHub'
                        />
                    </a>
                </IconButton>
                <p id='SocialMediaBar--Lines'>- - -</p>
            </Stack>
        </div>
    );
};

export default SocialMediaBar;
