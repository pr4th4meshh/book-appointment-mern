import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const CAROUSEL_IMAGES = [
  {
    id: 1,
    imageLink: "https://www.skinandyou.in/static/media/thread-lift.448975f3681580c194c5.jpg",
    imageRoute: "/coming-soon",
  },
  {
    id: 2,
    imageLink: "https://www.skinandyou.in/static/media/beauty-possibilities.645fee054da474f35abd.jpg",
    imageRoute: "/coming-soon",
  },
  {
    id: 3,
    imageLink: "https://www.skinandyou.in/static/media/thread-lift.448975f3681580c194c5.jpg",
    imageRoute: "/coming-soon",
  },
];

const HeroSection: React.FC = () => {
  return (
    <div className="w-full">
      <Carousel
        arrows
        autoplay
        swipeToSlide
        infinite
        draggable
        dots={false}
        className="relative"
      >
        {CAROUSEL_IMAGES.map((item) => (
          <div key={item.id} className="relative w-full h-[200px] md:h-[500px] lg:h-[600px]">
            {/* <Link href={item.imageRoute}> */}
              <Image
                src={item.imageLink}
                alt="carousel-image"
                quality={100}
                fill
                className="w-full h-full"
              />
            {/* </Link> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;