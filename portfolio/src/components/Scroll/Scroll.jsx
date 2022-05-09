import React from 'react';
import './Scroll.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Scroll = ({ Target }) => {
    return (
        <div id='Scroll'>
            <div id='Scroll--Div'>
                <a href={Target}>
                    <KeyboardArrowDownIcon id='Scroll--img' />
                </a>
            </div>
        </div>
    );
};

export default Scroll;
