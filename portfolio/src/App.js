import './App.css';
import Container from '@mui/material/Container';
import {
    Header,
    Hero,
    SocialMediaBar,
    About,
    Scroll,
    EmailBar,
    Projects,
    CTA,
    Footer,
    InTouch,
} from './components/components';

// Dagens projekt:
// Intro Animation
// Footer med Signature osv.
// Cleaning Code

function App() {
    return (
        <div className='App'>
            <Header />
            <SocialMediaBar />
            <EmailBar />
            <Container maxWidth='md' id='App--Container'>
                <Hero />
                <CTA />
                <Scroll Target={'#About'} />
                <About />
                <Scroll Target={'#Projects'} />

                <Projects />
                <Scroll Target={'#InTouch'} />
                <InTouch />
                <CTA position={'center'} padding={'40vh'} />
            </Container>
        </div>
    );
}

export default App;
