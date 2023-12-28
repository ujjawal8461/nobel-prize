
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './Header.css';

function Header() {
  return (
    <Carousel className="carousel"> 

<div className="banner-slide">
        <div className="banner-content">
          <div className="banner-image">
            <img src="/assets/LiusPauling.png" alt="Image 2" />
          </div>
          <div className="banner-paragraphs">
            <h2 className="banner-heading">Linus Pauling</h2>
            <hr className='line' />
            <p>Nobel Prizes: Chemistry in 1954, Peace in 1962.</p>
            <p>Notable Achievements: Research on the nature of the chemical bond, activism against nuclear weapons testing.</p>
          </div>
        </div>
      </div>

      <div className="banner-slide">
        <div className="banner-content">
          <div className="banner-image">
            <img src="/assets/marieCurie.png" alt="Image 1" />
          </div>
          <div className="banner-paragraphs">
            <h2 className="banner-heading">Marie Curie</h2>
            <hr className='line' />
            <p>Nobel Prizes: Physics in 1903 (shared with Pierre Curie and Henri Becquerel), Chemistry in 1911.</p>
            <p>Notable Achievements: Pioneering research on radioactivity, discovery of radium and polonium</p>
          </div>
        </div>
      </div>

     

      <div className="banner-slide">
        <div className="banner-content">
          <div className="banner-image">
            <img src="/assets/FrederickSanger.png" alt="Image 3" />
          </div>
          <div className="banner-paragraphs">
            <h2 className="banner-heading">Frederick Sanger</h2>
            <hr className='line' />
            <p>Nobel Prizes: Chemistry in 1958, Chemistry in 1980 (shared with Paul Berg and Walter Gilbert).</p>
            <p>Paragraph 2: More text for the banner...</p>
          </div>
        </div>
      </div>

      <div className="banner-slide">
        <div className="banner-content">
          <div className="banner-image">
            <img src="/assets/JohnBardeen.png" alt="Image 4" />
          </div>
          <div className="banner-paragraphs">
            <h2 className="banner-heading">John Bardeen</h2>
            <hr className='line' />
            <p>Nobel Prizes: Physics in 1956 (shared with William Shockley and Walter Brattain), Physics in 1972 (shared with Leon Cooper and Robert Schrieffer).</p>
            <p>Notable Achievements: Co-invention of the transistor, development of the BCS theory of superconductivity.</p>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Header;
