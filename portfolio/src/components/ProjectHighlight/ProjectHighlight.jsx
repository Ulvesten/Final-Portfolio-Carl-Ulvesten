import React from 'react';
import './ProjectHighlight.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';

function ProjectHighlight({ Application }) {
    return (
        <div id='ProjectHighlight'>
            <div id='ProjectHighlight--Text--Div'>
                <div id='ProjectHighlight--PreTitleDiv'>
                    <p>Featured Project</p>
                </div>
                <div id='ProjectHighlight--TitleDiv'>
                    <h1>{Application.title}</h1>
                </div>
                <div id='ProjectHighlight--TextAreaDiv'>{Application.text}</div>
                <div id='ProjectHighlight--ShowcaseLangDiv'>
                    <p>{Application.languages}</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                </div>
                <div id='ProjectHighlight--IconsDiv'>
                    <IconButton onClick={() => {}}>
                        <a href='https://github.com/Ulvesten/TipApp.Github.Io'>
                            <GitHubIcon
                                sx={{ color: '#a8b2d1' }}
                                id='ProjectHighlight--GitHub'
                            />
                        </a>
                    </IconButton>
                    <IconButton onClick={() => {}}>
                        <a href={Application.github}>
                            <ArrowUpwardSharpIcon
                                sx={{ color: '#a8b2d1' }}
                                id='ProjectHighlight--Link'
                            />
                        </a>
                    </IconButton>
                </div>
            </div>
            <div id='ProjectHighlight--Image--Div'>
                <img src={Application.image} alt='' />
            </div>
        </div>
    );
}

export default ProjectHighlight;
