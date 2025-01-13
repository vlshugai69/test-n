"use client";

import React, { useEffect, useRef, useState } from "react";
import SlotMachineNumber from "../components/slot-machine-number";
import Image from "next/image";

const Problem = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateIsMobile = () => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setIsMobile(window.innerWidth <= 768);
      }, 100);
    }
    setHoveredCard(null);
  };

  useEffect(() => {
    updateIsMobile();

    window.addEventListener("resize", updateIsMobile);
    window.addEventListener("orientationchange", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
      window.removeEventListener("orientationchange", updateIsMobile);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          if (entry.isIntersecting) {
            setHoveredCard(cardIndex);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      }
    );

    if (isMobile) {
      cardRefs.current.forEach((card) => {
        if (card) observer.observe(card);
      });
    }

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [isMobile]);

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };

  return (
    <div className="w-full px-[4.5rem] py-[8.75rem] flex flex-col justify-start items-start gap-20 bg-[#040420] max-xs:px-[1rem] max-xs:py-[5rem]">
      {/* Section Header */}
      <div className="flex w-full justify-between items-start gap-[12.38rem] max-sm:flex-col max-sm:gap-4">
        <div className=" w-full max-w-[28.75rem] text-white font-bold font-sf-pro-display">
          <h2>It&apos;s hard to trust the news</h2>
        </div>
        <div className="grow text-[#c1c3cc] max-w-[38.875rem] text-[1.75rem] font-normal font-sf-pro-display leading-[140%] max-xs:text-[1.25rem]">
          Noise, misinformation, and vitriol overwhelm the quest for knowledge
          and understanding of current events. Existing platforms incentivize
          rancor and discord, polluting the public square.
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="w-full self-stretch flex justify-start items-center gap-5 max-sm:flex-col">
        {/* Card 1 */}
        <div
          ref={setCardRef(0)}
          data-index={1}
          className={`w-full max-w-[40.8%] h-[23.75rem] relative rounded-[2.5rem] overflow-hidden p-8 flex flex-col justify-between max-sm:max-w-none max-xs:p-6 ${
            hoveredCard === 1 ? "bg-[#923cfb]" : "bg-[#1E1E37]"
          } transition`}
          onMouseEnter={() => !isMobile && setHoveredCard(1)}
          onMouseLeave={() => !isMobile && setHoveredCard(null)}
        >
          {/* Background SVG */}
          {hoveredCard === 1 && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('/images/components/small-background-logo.svg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                opacity: 0.8,
                filter: "brightness(2) contrast(2)",
              }}
            ></div>
          )}

          {/* Card Content */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div>
                <Image
                  src="/images/components/pew-research-combination-mark.svg"
                  alt="Pew Research Logo"
                  width={179}
                  height={26}
                  className="w-[11.19rem] h-[1.625rem]"
                />
              </div>
              <a
                href="https://www.pewresearch.org/short-reads/2020/02/26/almost-seven-in-ten-americans-have-news-fatigue-more-among-republicans/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex justify-center items-center ${
                  hoveredCard === 1 ? "bg-[#ffffff]" : "bg-[#35354B]"
                } transition`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 ${
                    hoveredCard === 1 ? "text-[#923cfb]" : "text-[#ffffff]"
                  } transition rotate-[-45deg]`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            <div className="flex items-center mt-auto mb-4">
              <div className="flex justify-end text-right">
                <SlotMachineNumber
                  finalValue={66}
                  className="text-[6.25rem] leading-[100%] max-xs:text-[4rem]"
                />
              </div>

              <div className="text-[6.25rem] font-extrabold leading-[100%] text-white ml-[2.75rem] max-xs:text-[4rem] max-xs:ml-[0]">
                %
              </div>

              <div className="text-xl font-semibold uppercase leading-[132%] text-white ml-[1.25rem] max-xs:ml-[1rem] max-xs:text-[0.9375rem]">
                of Americans feel worn out by the news.
              </div>
            </div>

            <div
              className={`${
                hoveredCard === 1 ? "text-white" : "text-[#c1c3cc]"
              } text-lg font-normal leading-[1.125rem] transition max-xs:text-[1.125rem]`}
            >
              The sheer volume of online content makes it difficult to find
              valuable, relevant information.
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          ref={setCardRef(1)}
          data-index={2}
          className={`w-full max-w-[31%] h-[23.75rem] relative rounded-[2.5rem] overflow-hidden p-8 flex flex-col justify-between max-sm:max-w-none ${
            hoveredCard === 2 ? "bg-[#923cfb]" : "bg-[#1E1E37]"
          } transition`}
          onMouseEnter={() => !isMobile && setHoveredCard(2)}
          onMouseLeave={() => !isMobile && setHoveredCard(null)}
        >
          {/* Background SVG */}
          {hoveredCard === 2 && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('/images/components/small-background-logo.svg')",
                backgroundSize: "130%", // Adjusted to fit narrower cards
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center", // Keep it centered
                opacity: 0.8,
                filter: "brightness(1.8) contrast(1.8)",
              }}
            ></div>
          )}

          {/* Card Content */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/components/knight-foundation-combination-mark.svg"
                  alt="Knight Foundation Logo"
                  width={111}
                  height={32}
                  className="w-[6.938rem] h-[2rem]"
                />
              </div>
              <a
                href="https://knightfoundation.org/reports/american-views-2023-part-2/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex justify-center items-center ${
                  hoveredCard === 2 ? "bg-[#ffffff]" : "bg-[#35354B]"
                } transition`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 ${
                    hoveredCard === 2 ? "text-[#923cfb]" : "text-[#ffffff]"
                  } transition rotate-[-45deg]`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            <div className="flex items-center mt-auto mb-4">
              <div
                className="w-[5.625rem] flex justify-end"
                style={{ textAlign: "right" }}
              >
                <SlotMachineNumber
                  finalValue={50}
                  className="text-[4rem] leading-[100%]"
                />
              </div>

              <div className="text-[4rem] font-extrabold leading-[100%] text-white">
                %
              </div>

              <div className="text-[0.9375rem] font-semibold uppercase leading-tight text-white ml-[1.25rem] max-xs:ml-[1rem]">
                feel news media actively mislead the public.
              </div>
            </div>

            <div
              className={`${
                hoveredCard === 2 ? "text-white" : "text-[#c1c3cc]"
              } text-lg font-normal leading-[140%] transition max-xs:text-[1.125rem]`}
            >
              The prevalence of false and misleading news undermines public
              trust.
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          ref={setCardRef(2)}
          data-index={3}
          className={`w-full max-w-[25%] h-[23.75rem] relative rounded-[2.5rem] overflow-hidden p-8 flex flex-col justify-between max-sm:max-w-none ${
            hoveredCard === 3 ? "bg-[#923cfb]" : "bg-[#1E1E37]"
          } transition`}
          onMouseEnter={() => !isMobile && setHoveredCard(3)}
          onMouseLeave={() => !isMobile && setHoveredCard(null)}
        >
          {/* Background SVG */}
          {hoveredCard === 3 && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('/images/components/small-background-logo.svg')",
                backgroundSize: "140%", // Slightly larger for the smallest card
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center", // Keep it centered
                opacity: 0.8,
                filter: "brightness(1.8) contrast(1.8)",
              }}
            ></div>
          )}

          {/* Card Content */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div>
                <Image
                  src="/images/components/pew-research-combination-mark.svg"
                  alt="Pew Research Logo"
                  width={179}
                  height={26}
                  className="w-[11.19rem] h-[1.625rem]"
                />
              </div>
              <a
                href="https://www.pewresearch.org/internet/2021/01/13/the-state-of-online-harassment/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex justify-center items-center ${
                  hoveredCard === 3 ? "bg-[#ffffff]" : "bg-[#35354B]"
                } transition`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 ${
                    hoveredCard === 3 ? "text-[#923cfb]" : "text-[#ffffff]"
                  } transition rotate-[-45deg]`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            <div className="flex items-center mt-auto mb-4">
              <div
                className="w-[5.625rem] flex justify-end"
                style={{ textAlign: "right" }}
              >
                <SlotMachineNumber
                  finalValue={40}
                  className="text-[4rem] leading-[100%]"
                />
              </div>

              <div className="text-[4rem] font-extrabold leading-[100%] text-white">
                %
              </div>

              <div className="text-[0.9375rem] font-semibold uppercase leading-tight text-white ml-[1.25rem] max-xs:ml-[1rem]">
                feel worn out by the news.
              </div>
            </div>

            <div
              className={`${
                hoveredCard === 3 ? "text-white" : "text-[#c1c3cc]"
              } text-[1.125rem] font-normal leading-[140%] transition max-xs:text-[1.125rem]`}
            >
              The volume of content makes it hard to find relevant information.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
