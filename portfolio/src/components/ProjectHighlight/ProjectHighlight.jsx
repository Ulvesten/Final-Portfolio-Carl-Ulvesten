import React from 'react';
import './ProjectHighlight.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';

function ProjectHighlight({
    image,
    title,
    github,
    demo,
    text,
    languages,
    even,
}) {
    return (
        <div class={even ? 'ProjectHighlight' : 'ProjectHighlight--Reverse'}>
            <div class='ProjectHighlight--Text--Div'>
                <div class='ProjectHighlight--PreTitleDiv'>
                    <p>Featured Project</p>
                </div>
                <div class='ProjectHighlight--TitleDiv'>
                    <h1>{title}</h1>
                </div>
                <div class='ProjectHighlight--TextAreaDiv'>{text}</div>
                <div
                    class={
                        even
                            ? 'ProjectHighlight--ShowcaseLangDiv'
                            : 'ProjectHighlight--Reverse--ShowcaseLangDiv'
                    }
                >
                    <p>{languages}</p>
                </div>
                <div class='ProjectHighlight--IconsDiv'>
                    <IconButton disableRipple='false' onClick={() => {}}>
                        <a href={github}>
                            <GitHubIcon
                                sx={{ color: '#a8b2d1' }}
                                class='ProjectHighlight--GitHub'
                            />
                        </a>
                    </IconButton>
                    <IconButton disableRipple='false' onClick={() => {}}>
                        <a href={demo}>
                            <ArrowUpwardSharpIcon
                                sx={{ color: '#a8b2d1' }}
                                class='ProjectHighlight--Link'
                            />
                        </a>
                    </IconButton>
                </div>
            </div>
            <div class='ProjectHighlight--Image--Div'>
                <img src={image} alt='' />
            </div>
        </div>
    );
}

export default ProjectHighlight;
