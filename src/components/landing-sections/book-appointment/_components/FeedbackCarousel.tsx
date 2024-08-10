import React from "react"
import { Carousel } from "antd"

const FEEDBACKS = [
  {
    id: 1,
    feedback:
      "Managing Director & Founder Member of Skin & You Clinic & CapitalG Healthcare Multiventures Private Limited, Nariman Point, Mumbai. A leading South Mumbai Skin Lasers & Aesthetic treatment clinic.",
    author: "Prathamesh Asolkar",
  },
  {
    id: 2,
    feedback:
      "CapitalG Healthcare Multiventures Private Limited, Nariman Point, Mumbai. A leading South Mumbai Skin Lasers & Aesthetic treatment clinic.",
    author: "Prathamesh Asolkar",
  },
]

const FeedbackCarousel = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <Carousel
      afterChange={onChange}
      className="w-[300px] md:w-[600px]"
      autoplay
      dots
      infinite
      draggable
      dotPosition="bottom"
    >
      {FEEDBACKS.map((item) => (
        <div className="px-5 py-6 h-[160px] shadow-black bg-white " key={item.id}>
          <h2 className="text-sm md:text-md italic text-gray-500">{item.feedback}</h2>
          <span className="text-md md:text-lg text-primary font-semibold">
            {item.author}
          </span>
        </div>
      ))}
    </Carousel>
  )
}

export default FeedbackCarousel
