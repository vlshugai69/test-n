"use client";

import Image from "next/image";
import Link from "next/link";
import useScrollHide from "../hooks/useScrollHide";

const Header = () => {
  const { isVisible, isScrolled } = useScrollHide();

  return (
    <header
      className={`w-full h-[6rem] flex justify-between items-center px-[4.5rem] py-[1.5rem] fixed top-0 left-0 z-50 transition-all duration-300 max-xs:px-[1rem] max-xs:py-[1.25rem] max-xs:h-[4rem] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="flex-shrink-0">
        {isScrolled ? (
          <Image
            src="/images/components/nuprizm_logo_triangle_color_active.svg"
            alt="Nuprizm Logo"
            width={160}
            height={32}
            className="w-[10rem] h-[2rem] max-xs:w-[7.625rem]"
          />
        ) : (
          <Image
            src="/images/components/nuprizm_logo_triangle_color.svg"
            alt="Nuprizm Logo"
            width={160}
            height={32}
            className="w-[10rem] h-[2rem] max-xs:w-[7.625rem]"
          />
        )}
      </div>
      <nav className="flex space-x-8 max-xs:space-x-4">
        <Link
          href="/"
          className={`font-sans font-medium text-[1.25rem] hover:opacity-80 ${
            isScrolled ? "text-[#06070D]" : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`font-sans font-medium text-[1.25rem] hover:opacity-80 ${
            isScrolled ? "text-[#06070D]" : "text-white"
          }`}
        >
          About us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
