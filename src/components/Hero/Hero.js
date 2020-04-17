import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="SectionHero">
            <div className="SectionHero-DataContainer">
                <h1 className="SectionHero-Title">Tjedan karijera</h1>
                <span className="SectionHero-Organizer">FOI</span>
                <p className="SectionHero-Date">20.10.2020. - 26.10.2020.</p>
                <Link to="/" className="CustomButton">Prijavi se</Link>
            </div>
        </section>
    );
}

export default Hero;