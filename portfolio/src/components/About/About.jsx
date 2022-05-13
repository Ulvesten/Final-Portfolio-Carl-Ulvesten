import React from 'react';
import './About.css';

function About() {
    return (
        <div id='About'>
            <div id='About--Text--Div'>
                <h1 id='About--Title'>CARL ULVESTEN</h1>
                <p id='About--Text'>
                    Hello! My name is Carl and i'm a aspiring Junior Software
                    Developer looking for my next challenge. I started
                    programing back in 2016 in high school - this sparked a
                    flame within me, I knew then that programing was my calling.
                    <br />
                    <br /> I never say no to tackle a challenge and learn
                    something new on the way. I've Recently been focusing on the
                    MERN(MongoDB, Express.JS, React.JS, Node.JS) Stack. Im on
                    the end stretch of a intense Bootcamp hosted by 'Techover'
                </p>
            </div>
            <div id='About--Image--Div'>
                <img id='About--Image' src='./assets/EBM02006.jpg' alt='' />
            </div>
        </div>
    );
}

export default About;
