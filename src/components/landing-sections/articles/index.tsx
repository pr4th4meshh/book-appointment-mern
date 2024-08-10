import React from "react"
import CardComponent from "./_components/Card"

const CARD_DATA = [
  {
    id: 1,
    title: "Dr. Geeta’s article on “How to treat hyperpigmentation",
    image:
      "https://www.skinandyou.in/wp-content/themes/skinandyou%203.0/images/non-surgical-skin-tightening.jpg",
  },
  {
    id: 2,
    title: "Dr. Geeta’s article on “How to treat hyperpigmentation",
    image:
      "https://www.skinandyou.in/wp-content/themes/skinandyou%203.0/images/eyebrows.jpg",
  },
  {
    id: 3,
    title: "Dr. Geeta’s article on “How to treat hyperpigmentation",
    image:
      "https://www.skinandyou.in/wp-content/themes/skinandyou%203.0/images/bridal.jpg",
  },
  {
    id: 4,
    title: "Dr. Geeta’s article on “How to treat hyperpigmentation",
    image:
      "https://www.skinandyou.in/wp-content/themes/skinandyou%203.0/images/causes-of-facial-wrinkles.jpg",
  },
]

const ArticlesSection = () => {
  return (
    <div className="w-full bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {CARD_DATA.map((item) => (
            <div
              className="flex justify-center md:justify-start items-center md:items-start"
              key={item.id}
            >
              <CardComponent item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticlesSection
