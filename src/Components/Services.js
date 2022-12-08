import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <>
      <div className="services">
        <Carousel
          infiniteLoop
          autoPlay
          interval={2000}
          showStatus={false}
          //showArrows={false} //next krva mate no arrow hide krva 
          showThumbs={false}
          //showIndicators={false}  // Indicators hide krva niche na . . . 
        >
          <div>
            <img src={img1} alt="item1" />
            <p className="legend">Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <img src={img2} alt="item2" />
            <p className="legend">Lorem ipsum dolor sit.</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Services;
