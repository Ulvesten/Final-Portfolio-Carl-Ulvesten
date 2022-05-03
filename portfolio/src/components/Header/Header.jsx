import React from 'react';
import './Header.css';
function Header() {
    return (
        <div>
            <div id='Header'>
                <div id='Header-Logo'>Carl Ulvesten</div>
                <div id='Header-SectionsDiv'>
                    <a href='#About'>
                        <div id='Header-About'>About Me</div>
                    </a>
                    <a href='#ProjectHighlight'>
                        <div id='Header-Projects'>Projects</div>
                    </a>

                    <div id='Header-Contact'>Contact</div>
                    <div id='Header-Resume'>
                        <a href='./assets/Resume.pdf' target='_blank'>
                            <button>Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
