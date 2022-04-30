import './App.css';
import Container from '@mui/material/Container';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero';
import SocialMediaBar from './components/SocialMediaBar/SocialMediaBar';
import About from './components/About/About';
import Scroll from './components/Scroll/Scroll';
import EmailBar from './components/EmailBar/EmailBar';

function App() {
    return (
        <div className='App'>
            <div id='Header--Div'>
                <Header />
                <SocialMediaBar />
                <EmailBar />
            </div>
            <Container maxWidth='md' id='App--Container'>
                <Hero />
                <Scroll />
                <About />
                <Scroll />
            </Container>
        </div>
    );
}

export default App;
