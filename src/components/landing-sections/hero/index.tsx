import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const CAROUSEL_IMAGES = [
  {
    id: 1,
    imageLink: "https://via.placeholder.com/1000x600",
    imageRoute: "/coming-soon",
  },
  {
    id: 2,
    imageLink: "https://via.placeholder.com/1000x600",
    imageRoute: "/coming-soon",
  },
  {
    id: 3,
    imageLink: "https://via.placeholder.com/1000x600",
    imageRoute: "/coming-soon",
  },
  {
    id: 4,
    imageLink: "https://via.placeholder.com/1000x600",
    imageRoute: "/coming-soon",
  },
  {
    id: 5,
    imageLink: "https://via.placeholder.com/1000x600",
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
          <div key={item.id} className="relative w-full h-80 md:h-[500px] lg:h-[600px]">
            {/* <Link href={item.imageRoute}> */}
              <Image
                src={item.imageLink}
                alt="carousel-image"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            {/* </Link> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;