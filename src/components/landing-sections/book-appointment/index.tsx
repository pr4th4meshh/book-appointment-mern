import AppointmentForm from "@/components/ui/AppointmentForm";
import React from "react";
import FeedbackCarousel from "./_components/FeedbackCarousel";

const BookAppointmentSection = () => {
  return (
    <div id="book-an-appointment" className="w-full bg-[#ffe2cf] py-10">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center md:items-start md:justify-between gap-10">
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase text-primary text-center pb-4">
              Book an appointment
            </h1>
            <AppointmentForm />
          </div>
          <div className="flex-1">
            <FeedbackCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentSection;