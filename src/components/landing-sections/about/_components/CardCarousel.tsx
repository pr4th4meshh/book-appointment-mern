import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import CardComponent from "./Card";

const CARD_DATA = [
  {
    id: 1,
    title: "body slimming treatment",
    image: "https://www.skinandyou.in/static/media/open-pores.96fc540ebfefe8258e72.jpg"
  },
  {
    id: 2,
    title: "acne/acne reduction",
    image: "https://www.skinandyou.in/static/media/milk-peel-vitamin-peel-blog.b23b6dc59ac24084ce0a.jpg"
  },
  {
    id: 3,
    title: "body slimming treatment",
    image: "https://www.skinandyou.in/static/media/skin-care.b31511c0f30a52163f61.jpg"
  },
  {
    id: 4,
    title: "acne/acne reduction",
    image: "https://www.skinandyou.in/static/media/milk-peel-vitamin-peel-blog.b23b6dc59ac24084ce0a.jpg"
  },
  {
    id: 5,
    title: "body slimming treatment",
    image: "https://www.skinandyou.in/static/media/de-tanning.5c26286e2413e0e860a6.jpg"
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