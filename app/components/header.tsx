// In header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useScrollHide from "../hooks/useScrollHide";
import { usePathname } from "next/navigation";

const Header = () => {
  const { isVisible, isScrolled } = useScrollHide();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    if (window.innerWidth <= 479) {
      setIsMenuOpen(!isMenuOpen);

      document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
    }
  };

  const getLinkClassName = (path: string) => {
    const isActive = pathname === path;
    const baseClasses =
      "font-sans whitespace-nowrap w-full font-medium sm:text-[1.25rem] text-[1.75rem] hover:opacity-80 menu-link sm:menu-appear";

    if (isMenuOpen) {
      return `${baseClasses} text-white ${
        path === "/"
          ? "pb-8 border-b border-[#35354B]"
          : path === "/about"
          ? "pb-8 pt-8 border-b border-[#35354B]"
          : "pt-8"
      }`;
    }

    return `${baseClasses} ${
      isActive
        ? `${
            isScrolled ? "text-[#06070D]" : "text-white"
          } relative before:content-[''] before:radius-[0.25rem] before:block before:absolute before:w-[1rem] before:h-[0.25rem] before:bg-[#7F5AF0] before:bottom-[-0.5rem] before:left-1/2 before:-translate-x-1/2`
        : isScrolled
        ? "text-[#06070D]"
        : "text-white"
    }`;
  };

  return (
    <>
      <header
        className={`w-full h-[6rem] flex justify-between items-center px-[4.5rem] py-[1.5rem] fixed top-0 left-0 z-50 transition-all duration-300 max-xs:px-[1rem] max-xs:py-[1.25rem] max-xs:h-[4rem] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="flex-shrink-0 z-50 relative">
          {isScrolled && !isMenuOpen ? (
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

        <nav
          className={`sm:flex sm:space-x-8 transition-opacity duration-300 ${
            isMenuOpen
              ? "fixed min-h-screen inset-0 bg-[#040420] z-40 flex flex-col items-start pt-[5.69rem] px-4 sm:relative sm:inset-auto sm:bg-transparent sm:pt-0 md:px-0 menu-visible opacity-100"
              : "absolute sm:static opacity-0 sm:opacity-100"
          }`}
        >
          <Link
            href="/"
            onClick={() => toggleMenu()}
            className={getLinkClassName("/")}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => toggleMenu()}
            className={getLinkClassName("/about")}
          >
            About us
          </Link>
          <Link
            href="/careers"
            onClick={() => toggleMenu()}
            className={getLinkClassName("/careers")}
          >
            Careers
          </Link>
        </nav>

        <button
          onClick={toggleMenu}
          className="sm:hidden rounded-[6.25rem] border-[1px] border-[solid] border-[rgba(255,255,255,0.2)] py-[0.5rem] px-[1rem] flex justify-center items-center z-50"
          aria-label="Toggle menu"
        >
          <div
            className={`flex items-center transition-opacity duration-300 gap-[0.25rem] ${
              isMenuOpen
                ? "opacity-100"
                : "opacity-0 pointer-events-none absolute"
            }`}
          >
            <p className="text-[1rem] leading-[100%] font-medium text-white transition-opacity duration-300">
              Close
            </p>
            <div className="flex flex-col justify-center items-center space-y-[3px] w-[1.5rem] h-[1.5rem] transition-opacity duration-300">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.10038 17.8995L15.9999 8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6.10038 8.1005L15.9999 18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div
            className={`flex items-center gap-[0.25rem] transition-all duration-300 ${
              isMenuOpen
                ? "opacity-0 pointer-events-none absolute"
                : "opacity-100"
            }`}
          >
            <p
              className={`text-[1rem] leading-[100%] font-medium ${
                isScrolled ? "text-[#06070D]" : "text-white"
              }`}
            >
              Menu
            </p>
            <div className="flex flex-col justify-center items-center space-y-[3px] w-[1.5rem] h-[1.5rem]">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 12.5C20 12.1038 19.6534 11.7826 19.2258 11.7826H4.77419C4.34662 11.7826 4 12.1038 4 12.5C4 12.8962 4.34662 13.2174 4.77419 13.2174H19.2258C19.6534 13.2174 20 12.8962 20 12.5Z"
                  fill={isScrolled ? "#06070D" : "white"}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 7.71739C20 7.32119 19.6534 7 19.2258 7H4.77419C4.34662 7 4 7.32119 4 7.71739C4 8.1136 4.34662 8.43478 4.77419 8.43478H19.2258C19.6534 8.43478 20 8.1136 20 7.71739Z"
                  fill={isScrolled ? "#06070D" : "white"}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 17.2826C20 16.8864 19.6534 16.5652 19.2258 16.5652H4.77419C4.34662 16.5652 4 16.8864 4 17.2826C4 17.6788 4.34662 18 4.77419 18H19.2258C19.6534 18 20 17.6788 20 17.2826Z"
                  fill={isScrolled ? "#06070D" : "white"}
                />
              </svg>
            </div>
          </div>
        </button>
      </header>
    </>
  );
};

export default Header;
