import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Departments = () => {
  const departmentsArray = [
    {
      name: "Palmistry",
      imageUrl: "/departments/palmistry.jpg",
    },
    {
      name: "Numeral Astrology",
      imageUrl: "/departments/umero.jpg",
    },
    {
      name: "Vedic Astrology",
      imageUrl: "/departments/sizee.jpg",
    },
    {
      name: "Western Astrology",
      imageUrl: "/departments/western1.webp",
    },
    {
      name: "Chinese Astrology",
      imageUrl: "/departments/chinese.jpg",
    },
    {
      name: "Horary Astrology",
      imageUrl: "/departments/horary.jpg",
    },
    {
      name: "Synastry",
      imageUrl: "/departments/synastry.jpg",
    },
    {
      name: "Mundane Astrology",
      imageUrl: "/departments/mundane.webp",
    },
    {
      name: "Mayan Astrology",
      imageUrl: "/departments/mayan.webp",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Our Astrology Offerings</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
