import React from "react";
import CardComponent from "./_components/Card";

const CARD_DATA = [
  {
    id: 1,
    title: "video",
  },
  {
    id: 2,
    title: "blogs",
    url: "/coming-soon"
  },
  {
    id: 3,
    title: "awards",
    url: "/coming-soon"
  },
];

const TestimonialsSection = () => {
  return (
    <div className="w-full py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CARD_DATA.map((item) => (
            <div className="flex justify-center md:justify-start items-center md:items-start" key={item.id}>
              <CardComponent item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;