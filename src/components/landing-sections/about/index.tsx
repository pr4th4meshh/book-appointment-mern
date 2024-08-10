import React from "react";
import AboutCard from "./_components/AboutCard";
import CardCarousel from "./_components/CardCarousel";

const AboutSection = () => {
  return (
    <div className="bg-primary w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="py-14 flex justify-center items-center">
          <h1 className="uppercase text-2xl sm:text-3xl lg:text-4xl text-white font-semibold text-center">
            A LEADING SKIN LASERS & DERMATOLOGY CLINIC IN MUMBAI
          </h1>
        </div>
      </div>

      {/* about card */}
      <div className="flex justify-center items-center bg-[#ffe2cf] p-8 sm:p-10 lg:p-14">
        <AboutCard />
      </div>

      {/* card carousel */}
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <CardCarousel />
      </div>
    </div>
  );
};

export default AboutSection;