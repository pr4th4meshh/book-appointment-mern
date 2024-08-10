import { Button } from "antd"
import Image from "next/image"
import React from "react"

const AboutCard = () => {
  return (
    <div className="flex flex-row mx-4 md:mx-[200px]">
      <div className="hidden flex-1 md:block">
        <Image
          height={300}
          width={300}
          className="w-full h-[400px]"
          src={"https://www.skinandyou.in/wp-content/themes/skinandyou%203.0/images/dr-geeta-mehra-fazalbhoy-home-img.jpg"}
          quality={100}
          alt="about card"
        />
      </div>
      <div className="flex text-white flex-col flex-1 p-8 justify-around bg-primary">
        <h1 className="text-2xl font-bold">DR. GEETA MEHRA FAZALBHOY</h1>
        <p className="text-md font-light">
          Managing Director & Founder Member of Skin & You Clinic & CapitalG
          Healthcare Multiventures Private Limited, Nariman Point, Mumbai. A
          leading South Mumbai Skin Lasers & Aesthetic treatment clinic. Dr.
          Geeta Mehra Fazalbhoy was 1st to introduce Micro Current Non Invasive
          Technology and Worlds leading RF Skin
        </p>
        <Button className="uppercase px-12 py-6 border-[2px] rounded-md w-min bg-transparent text-white font-semibold text-md">
          read more
        </Button>
      </div>
    </div>
  )
}

export default AboutCard
