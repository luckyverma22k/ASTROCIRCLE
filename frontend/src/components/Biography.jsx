import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          AstroCircle is your gateway to the stars, offering personalized astrology services tailored to guide you 
          through life's journey. Our platform brings together skilled astrologers specializing in various disciplines, 
          including palmistry, numerology, 
          tarot readings, and more. With a deep passion for the cosmic arts, we are 
          dedicated to helping you uncover the mysteries of your destiny and align with your true path.
          </p>
          <p>We are all in 2024!</p>
          <p>We are committed to making astrology accessible and insightful for everyone.</p>
          <p>
          AstroCircle is more than just a platform—it's a community of like-minded individuals who believe in the power of celestial guidance. Whether you're seeking clarity, purpose, or simply a deeper connection with the universe, our experts are here to provide the insights you need. Every reading is an opportunity to discover something new about yourself and the world around you.
          </p>
          <p>Your Cosmic Journey Begins Here!</p>
          <p>Unveil the stars, explore your destiny, and embrace the wisdom 
            of the cosmos. At AstroCircle, we believe that every step you take is written in the stars.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
