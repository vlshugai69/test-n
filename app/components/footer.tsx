import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center w-full bg-[#040420] px-[4.5rem] py-[3.37rem] max-xs:px-[1rem] max-sm:py-[2rem] max-sm:flex-col-reverse max-sm:items-start">
      {/* Copyright Section */}
      <div className="text-[#c1c3cc] text-lg font-normal font-sf-pro-display leading-[25.20px] max-sm:mt-8">
        ©{currentYear} Nuprizm. All Rights Reserved.
      </div>

      {/* Center Links */}
      <div className="absolute left-2/4 -translate-x-1/2 flex items-center gap-8 max-sm:static max-sm:transform-none max-sm:flex-col max-sm:items-start max-sm:gap-6 max-sm:mt-6">
        <div className="rounded-full backdrop-blur-[9.60px] flex justify-center items-center">
          <Link href="/privacy">
            <div className="text-white text-xl font-medium font-sf-pro-display leading-tight whitespace-nowrap">
              Privacy Policy
            </div>
          </Link>
        </div>
        <div className="rounded-full backdrop-blur-[9.60px] flex justify-center items-center">
          <Link href="/terms">
            <span className="text-white text-xl font-medium font-sf-pro-display leading-tight whitespace-nowrap">
              Terms of Service
            </span>
          </Link>
        </div>
        <div className="rounded-full backdrop-blur-[9.60px] flex justify-center items-center">
          <Link href="/support">
            <div className="text-white text-xl font-medium font-sf-pro-display leading-tight">
              Support
            </div>
          </Link>
        </div>
      </div>

      {/* Right Links */}
      <div className="flex items-center gap-8 max-sm:flex-col max-sm:items-start max-sm:gap-6">
        <div className="rounded-full backdrop-blur-[9.60px] flex justify-center items-center">
          <Link href="/">
            <div className="text-white text-xl font-medium font-sf-pro-display leading-tight">
              Home
            </div>
          </Link>
        </div>
        <div className="rounded-full backdrop-blur-[9.60px] flex justify-center items-center">
          <Link href="/about">
            <div className="text-white text-xl font-medium font-sf-pro-display leading-tight whitespace-nowrap">
              About us
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;