import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import '../components/styleCssFiles/HeroSectionProducts.css';

function HeroSectionProduct() {
  return (
    <div className='hero-container-product'>
   <img  src='/images/titleimg3.jpg' className='video12' />
      <h1>Our Products</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
  <Link to='/products'> Our Products</Link>
        </Button> */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          <Link to='/contact'> Contact Us</Link>
          {/* <i className='far fa-play-circle' /> */}
        </Button>
      </div>
    </div>
  );
}

export default HeroSectionProduct;