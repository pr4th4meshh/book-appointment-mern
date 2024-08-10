import { Card } from "antd"
import Image from "next/image"
import React from "react"

const CardComponent = ({ item }: any) => {
  return (
    <div>
      <Card
        styles={{ body: { padding: 0 } }}
        className="my-[20px] md:my-[40px] rounded-none w-[300px] md:w-[280px]"
      >
        <Image
          src={"https://via.placeholder.com/600x600"}
          height={200}
          width={280}
          className="h-[180px] w-full"
          alt="card-image"
        />
        <h1 className="uppercase text-sm font-semibold p-4 text-gray-700 text-wrap">
          {item.title}
        </h1>
      </Card>
    </div>
  )
}

export default CardComponent