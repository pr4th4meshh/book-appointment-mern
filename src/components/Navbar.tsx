"use client"
import React from "react"
import { IoLocationSharp } from "react-icons/io5"
import {
  FacebookOutlined,
  PhoneOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons"
import Link from "next/link"
import { Button } from "antd"
import { useSession } from "next-auth/react"
import Image from "next/image"
import SearchBar from "./ui/SearchBar"

const NAV_LINKS = [
  { id: 1, title: "home", route: "/" },
  { id: 2, title: "treatments", route: "/" },
  { id: 3, title: "skin & faq", route: "/" },
  { id: 4, title: "view-appointments", route: "/view-appointments" },
]

const Navbar = () => {
  const { data: session } = useSession()
  return (
    <nav className="w-full">
      {/* top nav */}
      <div className="flex flex-col sm:flex-row justify-between container mx-auto px-4 lg:px-[130px] pb-2 border-b-[1px] border-gray-300 pt-4">
        <div className="flex flex-col sm:flex-row text-sm gap-2 md:gap-4 mb-2 sm:mb-0">
          <h1 className="flex items-center">
            <IoLocationSharp className="text-primary mr-1" /> 115 B Mittal
            Court, Nariman Point, Mumbai – 21
          </h1>
          <h1 className="flex items-center">
            <PhoneOutlined className="text-primary mr-1" /> +91 22
            22843000/22825555
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-2 text-primary">
          <FacebookOutlined className="text-xl" />
          <InstagramOutlined className="text-xl" />
          <LinkedinOutlined className="text-xl" />
          <TwitterOutlined className="text-xl" />
          <MailOutlined className="text-xl" />
        </div>
      </div>

      {/* main nav */}
      <div className="container mx-auto flex flex-col sm:flex-row px-4 md:px-[130px] py-7 justify-between items-center">
        <Link href="/">
          {/* <h1 className="text-3xl sm:text-4xl font-bold">Skin & You</h1> */}
          <Image
            alt="logo"
            src="https://www.skinandyou.in/wp-content/themes/skinandyou%203.0/images/logo.png"
            height={200}
            width={260}
            priority
            className="w-auto h-auto"
          />
        </Link>
        <h1 className="flex items-center text-sm sm:text-2xl">
          <PhoneOutlined className="text-primary mr-1" /> +91 22 22843000 /{" "}
          22825555
        </h1>
      </div>

      {/* bottom nav */}
      <div className="bg-primary py-2 text-white">
        <div className="flex flex-col sm:flex-row text-sm font-semibold container px-4 sm:px-6 lg:px-[130px] mx-auto justify-between uppercase items-center gap-y-2">
          {NAV_LINKS.map((item) => (
            <Link href={item.route} key={item.id}>
              <h1
                className={`cursor-pointer ${
                  item.id === 8 ? "border-b border-white" : "border-none"
                }`}
              >
                {item.title}
              </h1>
            </Link>
          ))}

          <SearchBar />

          <Link href={"#book-an-appointment"}>
            <Button type="text" className="bg-white px-6 py-2 text-primary">
              Book an appointment
            </Button>
          </Link>

          {!session ? (
            <Link href="/register">Sign up / sign in</Link>
          ) : (
            <h1 className="">hello, {session.user && session?.user.name}</h1>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
