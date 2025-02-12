"use client";

import Image from "next/image";

const OriginStory = () => {
  const stats = [
    {
      number: "5,000+",
      label: "Daily Articles Analyzed",
    },
    {
      number: "96%",
      label: "Bias Detection Rate",
    },
    {
      number: "200+",
      label: "News Categories Covered",
    },
  ];

  return (
    <section className="relative bg-[#040420] h-[54rem] max-xl:h-auto px-[4.5rem] pt-[8.75rem] pb-[2.94rem] max-sm:px-[1rem] max-sm:py-[5rem]">
      <Image
        src="/images/components/bg-decor.svg"
        alt="Download on the App Store"
        width={160}
        height={80}
        className="absolute left-0 top-[3.88rem] w-[37.84rem] h-[48.3rem] object-contain"
      />
      <div className="flex flex-col max-w-[81rem] m-auto">
        <h2 className="w-[28.75rem] max-md:w-full text-white font-bold font-sf-pro-display leading-[3.7125rem] max-md:leading-[2.75rem] max-sm:leading-[2.2rem] mb-[2.5rem]">
          Origin Story
        </h2>

        <div className="flex col-gap-[11.5rem] justify-between max-sm:flex-col">
          {/* Text Content */}
          <div className="max-w-[50.19rem] w-full flex flex-col gap-[1rem]">
            <p className="text-[#c1c3cc] text-[1.75rem] max-md:text-[1.5rem] max-sm:text-[1.25rem] font-normal font-sf-pro-display leading-[2.45rem] max-md:leading-[2.1rem] max-sm:leading-[1.75rem]">
              When the presidential election cycle of 2016 ended in an unexpected upset,
              our founder asked himself &quot;how did we not see this coming?&quot; It was clear that 
              bias in journalism was leaving us misinformed and that people were afraid to express 
              how they really felt in public and on social media.
            </p>
            <p className="text-[#c1c3cc] text-[1.75rem] max-md:text-[1.5rem] max-sm:text-[1.25rem] font-normal font-sf-pro-display leading-[2.45rem] max-md:leading-[2.1rem] max-sm:leading-[1.75rem]">
              He envisioned a platform that helped reveal bias in the news, combined with a social
              experience that enabled private feedback, rewarded depth of knowledge, and optimized for 
              constructive dialog. But he didn&apos;t know how to code, so he switched careers and taught himself
              how, got published in media, recruited a team, and built the platform end-to-end on 
              nights and weekends while working full time as a software engineer.   

            </p>
            <p className="text-[#c1c3cc] text-[1.75rem] max-md:text-[1.5rem] max-sm:text-[1.25rem] font-normal font-sf-pro-display leading-[2.45rem] max-md:leading-[2.1rem] max-sm:leading-[1.75rem]">
              When LLMs became readily accessible in 2023, we knew immediately how they could supercharge our mission to 
              reveal bias in the news by analyzing narrative, context, sentiment, language, framing, and millions
              of other parameters in real-time across the media ecosystem at large. We&apos;re incredibly excited for
              the road ahead and for the opportunity to attack one of society&apos;s most pernicious problems. Join us! 
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            className="max-lg:mt-[2.5rem] w-full max-w-[19.3125rem] max-sm:max-w-full"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "6.8125rem",
                  padding: "1.5rem",
                  background: "#1e1e37",
                  borderRadius: "1rem",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    lineHeight: "2rem",
                    marginBottom: "0.125rem",
                  }}
                  className="font-sf-pro-display"
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    color: "#c1c3cc",
                    fontSize: "1.125rem",
                    fontWeight: "400",
                    lineHeight: "1.575rem",
                  }}
                  className="font-sf-pro-display"
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
