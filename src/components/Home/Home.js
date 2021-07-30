import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Hero from './Header/Hero/Hero';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;