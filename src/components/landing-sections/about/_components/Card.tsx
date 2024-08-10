import { Card } from "antd"
import Image from "next/image"
import React from "react"

const CardComponent = ({ item }: any) => {
  return (
    <div>
      <Card
        styles={{ body: { padding: 0 } }}
        className="my-[40px] mx-[20px] h-[280px] p-[0px] rounded-none"
      >
        <Image
          src={"https://via.placeholder.com/600x600"}
          height={200}
          width={280}
          className="h-[180px] w-full"
          alt="card-image"
        />
        <h1 className="uppercase text-lg font-bold p-4 text-gray-700">
          {item.title}
        </h1>
      </Card>
    </div>
  )
}

export default CardComponent
