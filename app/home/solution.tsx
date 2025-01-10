"use client";

import React from "react";
import Image from "next/image";

const Solution = () => {
  return (
    <div className="relative px-[4.5rem] pt-[7.5rem] pb-[7.5rem] bg-white flex flex-col justify-between items-start overflow-hidden max-xs:px-[1rem] max-xs:py-[5rem]">
      {/* Background Illustration */}
      <div
        className="absolute top-[-5rem] left-1/2 transform -translate-x-1/2 max-sm:top-[20rem]"
        style={{
          width: "68.25rem",
          height: "58.5rem",
          backgroundImage: "url('/images/components/background-logo.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Section Header */}
      <div className="relative z-10 flex w-full justify-between items-start gap-[12.38rem] mb-[5rem] max-sm:flex-col max-sm:gap-[1rem] max-sm:mb-[3.5rem]">
        <div className="w-full text-[#06070d] text-[3.375rem] font-bold font-sf-pro-display leading-[110%]">
          <h2>
            We&apos;re building <br />
            the future of news transparency
          </h2>
        </div>
        <div className="w-full max-w-[38.875rem] text-[#777777] text-[1.75rem] font-normal font-sf-pro-display leading-[140%] max-sm:text-[1.25rem]">
          Nuprizm fuses AI-powered media insights and public sentiment to bring
          transparency to the news. By analyzing bias, language, framing,
          sentiment and millions of other parameters, we bring clarity to
          current events amongst a sea of competing narratives.
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 gap-[3.75rem] flex w-full justify-between items-start max-sm:flex-col">
        {/* Feature 1 */}
        <div className="w-full flex flex-col justify-start items-start max-sm:items-center">
          <div className="w-20 h-20 p-[1.125rem] bg-[#040420] rounded-[2.5rem] flex justify-center items-center">
            <div className="relative overflow-hidden">
              <Image
                src="/images/components/ai-chip-icon.svg"
                alt="AI Chip Icon"
                width={36}
                height={36}
                className="w-[2.25rem] h-[2.25rem]"
              />
            </div>
          </div>
          <div className="text-[#06070d] text-[1.75rem] font-medium font-sf-pro-display leading-[100%] mt-[2.5rem] max-sm:mt-[1.75rem] max-sm:text-center max-xs:text-[1.5rem]">
            Intelligent Summaries
          </div>
          <div className="text-[#777777] text-[1.25rem] font-normal font-sf-pro-display mt-[0.75rem] leading-[140%] max-sm:text-center">
            We use AI to scour hundreds of sources to give you the facts fast.
          </div>
        </div>

        {/* Feature 2 */}
        <div className="w-full flex flex-col justify-start items-start max-sm:items-center">
          <div className="w-20 h-20 p-[1.125rem] bg-[#040420] rounded-[2.5rem] flex justify-center items-center">
            <div className="relative overflow-hidden">
              <Image
                src="/images/components/analytics-icon.svg"
                alt="Analytics Icon"
                width={36}
                height={36}
                className="w-[2.25rem] h-[2.25rem]"
              />
            </div>
          </div>
          <div className="text-[#06070d] text-[1.75rem] font-medium font-sf-pro-display leading-[100%] mt-[2.5rem] max-sm:mt-[1.75rem] max-sm:text-center max-xs:text-[1.5rem]">
            AI-powered Media Insights
          </div>
          <div className="text-[#777777] text-[1.25rem] font-normal font-sf-pro-display mt-[0.75rem] leading-[140%] max-sm:text-center">
            We bring transparency to the news by revealing bias, language,
            framing, sentiment, and millions of other parameters.
          </div>
        </div>

        {/* Feature 3 */}
        <div className="w-full flex flex-col justify-start items-start max-sm:items-center">
          <div className="w-20 h-20 p-[1.125rem] bg-[#040420] rounded-[2.5rem] flex justify-center items-center">
            <div className="relative overflow-hidden">
              <Image
                src="/images/components/rating-icon.svg"
                alt="Rating Icon"
                width={36}
                height={36}
                className="w-[2.25rem] h-[2.25rem]"
              />
            </div>
          </div>
          <div className="text-[#06070d] text-[1.75rem] font-medium font-sf-pro-display leading-[100%] mt-[2.5rem] max-sm:mt-[1.75rem] max-sm:text-center max-xs:text-[1.5rem]">
            Public Sentiment
          </div>
          <div className="text-[#777777] text-[1.25rem] font-normal font-sf-pro-display leading-[140%] mt-[0.75rem] max-sm:text-center">
            See how your ratings compare to others and gain new perspectives on
            current events.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
