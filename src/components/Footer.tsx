import React from "react";
import { FacebookOutlined, CopyrightCircleOutlined } from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#b0985a] py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[130px]">
        {/* Social Media and Approval Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-4">
          <div className="flex flex-row text-white text-xl sm:text-2xl gap-x-4">
            <FacebookOutlined />
            <FacebookOutlined />
            <FacebookOutlined />
            <FacebookOutlined />
            <FacebookOutlined />
            <FacebookOutlined />
          </div>

          <h1 className="text-white text-xl sm:text-2xl text-center">
            Approved by Skin & You
          </h1>
        </div>

        {/* Privacy Policy and Terms & Conditions Links */}
        <h1 className="text-gray-300 text-center text-xs sm:text-sm py-3 border-b border-gray-600 mb-4">
          <Link href="/privacy-policy">
            <span className="hover:underline">Privacy Policy</span>
          </Link>{" "}
          |{" "}
          <Link href="/terms-and-conditions">
            <span className="hover:underline">Terms and Conditions</span>
          </Link>
        </h1>

        {/* Copyright Notice */}
        <h1 className="text-gray-300 text-center text-xs sm:text-sm py-4">
          <CopyrightCircleOutlined /> 2024 Skin & You Clinic. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;