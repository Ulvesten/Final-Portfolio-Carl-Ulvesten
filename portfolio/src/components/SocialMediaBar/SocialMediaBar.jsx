import './SocialMediaBar.css';
import { Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialMediaBar = () => {
    return (
        <div id='SocialMediaBar'>
            <Stack spacing={1}>
                <p id='SocialMediaBar--Lines'>- - - </p>
                <IconButton onClick={() => {}}>
                    <a href='https://www.linkedin.com/in/carl-ulvesten-808111238/'>
                        <LinkedInIcon
                            sx={{ color: '#a8b2d1' }}
                            id='SocialMediaBar--Linkin'
                        />
                    </a>
                </IconButton>
                <p id='SocialMediaBar--Lines'>- - - </p>
                <IconButton onClick={() => {}}>
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
