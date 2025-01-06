import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../components/styleCssFiles/HeroSectionContactus.css';

function HeroSectionContactus() {
  return (
    <div className='hero-container'>
    <img  src='/images/contactus.jpg' className='video12' />
      <h1>Contact Us</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSectionContactus;