import React from 'react';
import './Scroll.css';

const Scroll = ({ Target }) => {
    return (
        <div id='Scroll'>
            <div id='Scroll--Div'>
                <a href={Target}>
                    <img
                        id='Scroll--img'
                        src='./assets/arrow-forward-ui-svgrepo-com (1).svg'
                        alt=''
                    />
                </a>
            </div>
        </div>
    );
};

export default Scroll;
