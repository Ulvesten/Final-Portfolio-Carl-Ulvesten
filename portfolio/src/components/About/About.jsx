import React from 'react';
import './About.css';

function About() {
    return (
        <div id='About'>
            <div id='About--Text--Div'>
                <h1 id='About--Title'>CARL ULVESTEN</h1>
                <p id='About--Text'>
                    Hello! My name is Brittany and I enjoy creating things that
                    live on the internet. My interest in web development started
                    back in 2012 when I decided to try editing custom Tumblr
                    themes — turns out hacking together a custom reblog button
                    taught me a lot about HTML & CSS! <br /> <br /> Fast-forward
                    to today, and I’ve had the privilege of working at an
                    advertising agency, a start-up, a huge corporation, and a
                    student-led design studio. My main focus these days is
                    building accessible, inclusive products and digital
                    experiences at Upstatement for a variety of clients.
                </p>
            </div>
            <div id='About--Image--Div'>
                <img id='About--Image' src='./assets/EBM02006.jpg' alt='' />
            </div>
        </div>
    );
}

export default About;
