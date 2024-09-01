import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
    <div className="hero container" style={{ paddingTop: "190px"  }}>
        <div className="banner">
          <h1>{title}</h1>
          <p>
          AstroCircle is your gateway to celestial wisdom, offering personalized 
          astrology consultations from expert astrologers across various disciplines. 
          Whether you seek insights through palmistry, numerology, tarot readings, or more, 
          our platform connects you with skilled professionals dedicated to guiding you on your life's journey.
           At AstroCircle, we ensure a seamless and enlightening experience, helping you navigate the stars 
          and discover the path to your true potential. Your cosmic journey begins here.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
