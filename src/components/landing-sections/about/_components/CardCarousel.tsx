import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import CardComponent from "./Card";

const CARD_DATA = [
  {
    id: 1,
    title: "body slimming treatment",
  },
  {
    id: 2,
    title: "acne/acne reduction",
  },
  {
    id: 3,
    title: "body slimming treatment",
  },
  {
    id: 4,
    title: "acne/acne reduction",
  },
  {
    id: 5,
    title: "body slimming treatment",
  },
];

const CardCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(1.1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); //cleanup func
  }, []);

  return (
    <Carousel
      autoplay
      draggable
      dots
      slidesToShow={slidesToShow}
      swipeToSlide
    >
      {CARD_DATA.map((item) => (
        <div key={item.id} className="p-1 md:p-4">
          <CardComponent item={item} />
        </div>
      ))}
    </Carousel>
  );
};

export default CardCarousel;