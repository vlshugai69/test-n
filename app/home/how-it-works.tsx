"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const HowItWorks = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const featureData = [
    {
      title: "Intelligent summaries",
      description:
        "Get fast insights into the most important news of the day.",
      imgSrc: "/images/topical-summary-device.png",
      iconSrc: "/images/components/intelligent-summaries-icon.svg",
      highlightColor: "#923CFB", // Purple
    },
    {
      title: "Deconstructed media narratives",
      description: "Discover bias, context, and sentiment with interactive tools.",
      imgSrc: "/images/media-engine-device.png",
      iconSrc: "/images/components/dissect-narratives-icon.svg",
      highlightColor: "#31CD64", // Green
    },
    {
      title: "An honest public square",
      description: "Privately weigh in on the most important issues of the day.",
      imgSrc: "/images/rating-device.png",
      iconSrc: "/images/components/opinion-icon.svg",
      highlightColor: "#F7B600", // Yellow
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % featureData.length);
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array since featureData is static

  return (
    <div className="relative px-[4.5rem] py-[8.75rem] w-full flex flex-row-reverse justify-center items-center bg-[#040420] overflow-hidden max-xs:py-[5rem] max-xs:px-[1rem] max-sm:flex-col-reverse max-sm:gap-y-[1.25rem]">
      {/* Background Card and Effects */}
      <div
        className="relative flex justify-center w-full h-full min-w-[34rem] max-w-[39.875rem] max-h-[43.75rem] rounded-[2.5rem] overflow-hidden transition-all duration-500 max-xs:rounded-[1rem] max-sm:min-w-0 max-xs:max-h-[25.43rem]"
        style={{
          backgroundColor: featureData[highlightedIndex].highlightColor,
        }}
      >
        {/* Blur effects - behind phone */}
        <div className="absolute w-[19.5rem] h-[19.5rem] left-[-9.75rem] top-[3.938rem] opacity-60 bg-white rounded-full blur-[100px] z-0" />
        <div className="absolute w-[10.875rem] h-[10.875rem] right-[-5.438rem] top-[22.313rem] opacity-80 bg-white rounded-full blur-[100px] z-0" />

        {/* Phone image - top layer */}
        <div className="px-[6.5rem] pt-[2.62rem] flex justify-center items-end z-10 max-xs:px-[1.94rem] max-xs:relative max-xs:top-[2rem]">
          <Image
            className="w-[27rem]"
            src={featureData[highlightedIndex].imgSrc}
            alt="Phone Display"
            width={432}
            height={886}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex justify-between items-start gap-[4.5rem] max-sm:w-full">
        {/* Left-hand Content */}
        <div className="w-full max-w-[36.625rem] flex flex-col gap-10 max-sm:max-w-none max-sm:min-w-[100%]">
          {/* Heading and Subtext */}
          <div className="flex flex-col gap-6">
            <div className="text-white font-bold font-sf-pro-display">
              <h2>Experience how to become truly informed</h2>
            </div>
            <div className="text-[#c1c3cc] text-[1.75rem] font-normal font-sf-pro-display leading-[140%] max-sm:text-[1.25rem]">
              Discover how Nuprizm empowers you to navigate the complex media
              landscape with ease and confidence.
            </div>
          </div>

          {/* Features List */}
          <div className="flex flex-col gap-5">
            {featureData.map((feature, index) => {
              const isHighlighted = highlightedIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-[1rem] inline-flex gap-4 justify-start items-start ${
                    isHighlighted
                      ? "bg-white pt-6 px-6 pb-[1.375rem]"
                      : "bg-[#1e1e37] p-6"
                  }`}
                  style={{
                    height: isHighlighted ? "auto" : "4.875rem",
                  }}
                >
                  <div className="w-[1.875rem] h-[1.875rem] relative flex items-center justify-center">
                    <Image
                      src={feature.iconSrc}
                      alt={`${feature.title} Icon`}
                      width={30}
                      height={30}
                      className="transition-all duration-500 min-w-[1.875rem] h-[1.875rem]"
                      style={{
                        filter: isHighlighted
                          ? `brightness(0) saturate(100%) ${
                              feature.highlightColor === "#923CFB"
                                ? "invert(47%) sepia(93%) saturate(7461%) hue-rotate(257deg) brightness(97%) contrast(93%)"
                                : feature.highlightColor === "#31CD64"
                                ? "invert(65%) sepia(69%) saturate(453%) hue-rotate(93deg) brightness(97%) contrast(85%)"
                                : "invert(71%) sepia(84%) saturate(728%) hue-rotate(359deg) brightness(103%) contrast(102%)"
                            }`
                          : "brightness(0) invert(1)",
                      }}
                    />
                  </div>
                  <div className="w-[31rem] flex-col justify-start items-start inline-flex">
                    <div
                      className="self-stretch h-[1.875rem] text-2xl font-medium font-sf-pro-display leading-[100%] transition-all duration-500 flex items-center"
                      style={{
                        color: isHighlighted
                          ? feature.highlightColor
                          : "#FFFFFF",
                      }}
                    >
                      {feature.title}
                    </div>
                    {isHighlighted && (
                      <div className="text-lg font-normal font-sf-pro-display leading-[140%] opacity-80 transition-all duration-500 text-black mt-[0.5rem]">
                        {feature.description}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right-hand Content */}
        <div className="w-[4.5rem]" />
      </div>
    </div>
  );
};

export default HowItWorks;
