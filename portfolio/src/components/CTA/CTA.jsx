import React from 'react';
import './CTA.css';
import Button from '@mui/material/Button';

function CTA() {
    return (
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
