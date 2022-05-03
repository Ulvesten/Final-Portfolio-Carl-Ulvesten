import './App.css';
import Container from '@mui/material/Container';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero';
import SocialMediaBar from './components/SocialMediaBar/SocialMediaBar';
import About from './components/About/About';
import Scroll from './components/Scroll/Scroll';
import EmailBar from './components/EmailBar/EmailBar';
import ProjectHighlight from './components/ProjectHighlight/ProjectHighlight';

const Application = { image: './assets/project2.jpg', title: 'Tip Splitter' };
const Application2 = {
    image: './assets/unknasdsadown.png',
    title: 'Tic Tac Toe',
    github: 'https://github.com/HansFilip96/TicTacToeMac',
    demo: '',
    text: 'This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!',
};

function App() {
    return (
        <div className='App'>
            <Header />
            <SocialMediaBar />
            <EmailBar />
            <Container maxWidth='md' id='App--Container'>
                <Hero />
                <Scroll Target={'#About'} />
                <About />
                <Scroll Target={'#ProjectHighlight'} />
                <ProjectHighlight Application={Application} />
                <ProjectHighlight Application={Application2} />
            </Container>
        </div>
    );
}

export default App;
