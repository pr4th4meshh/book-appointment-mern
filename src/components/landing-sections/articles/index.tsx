import React from "react"
import CardComponent from "./_components/Card"

const CARD_DATA = [
  {
    id: 1,
    title: "Dr. Geeta’s article on “How to treat hyperpigmentation",
  },
  {
    id: 2,
    title: "Dr. Geeta’s article on “How to treat hyperpigmentation",
  },
  {
    id: 3,
    title: "Dr. Geeta’s article on “How to treat hyperpigmentation",
  },
  {
    id: 4,
    title: "Dr. Geeta’s article on “How to treat hyperpigmentation",
  },
]

const ArticlesSection = () => {
  return (
    <div className="w-full bg-primary">
      <div className="container mx-auto flex justify-center items-center md:items-start md:justify-start px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {CARD_DATA.map((item) => (
          <div key={item.id}>
            <CardComponent item={item} />
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default ArticlesSection
