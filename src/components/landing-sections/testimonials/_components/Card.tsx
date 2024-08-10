import { Card } from "antd"
import Image from "next/image"
import React from "react"
import { ArrowRightOutlined } from "@ant-design/icons"
import Link from "next/link"

const CardComponent = ({ item }: any) => {
  return (
    <div>
      <Card
        styles={{ body: { padding: 0 } }}
        className="my-[20px] md:my-[40px] rounded-none  w-[300px] md:w-[400px]"
      >
        <h1 className="uppercase text-lg font-bold px-4 py-2 text-white bg-primary flex justify-between">
          {item.title}
          {item.url && (
            <Link href={item.url}>
              <ArrowRightOutlined />
            </Link>
          )}
        </h1>
        <Image
          src={"https://via.placeholder.com/600x600"}
          height={200}
          width={280}
          className="h-[180px] w-full"
          alt="card-image"
        />
      </Card>
    </div>
  )
}

export default CardComponent
