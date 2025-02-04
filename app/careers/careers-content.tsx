"use client";

import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";

const CareersContent = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const openPositions = [
    {
      id: 1,
      title: "CTO",
      type: "Full Time",
      location: "Remote or Los Angeles",
      salary: "$150k – $250k",
      description:
        "We are seeking a product-oriented CTO with deep experience in AI and ML to join us at the forefront of a pivotal mission. As a key member of our founding team, your role goes beyond technical mastery; you will be a driving force in using AI, ML and other advanced technologies to reshape the way we consume news.",
      details: {
        shares: "5% – 15% Equity",
        location: "Open to candidates across the United States",
        timezone: "PST",
        visa: "Not Available. U.S. citizens or valid work permit holders only",
      },
    },
    {
      id: 2,
      title: "Platform Recruiter",
      type: "Part Time",
      location: "Remote",
      salary: "$110-120k",
      description:
        "We are seeking a product-oriented CTO with deep experience in AI and ML to join us at the forefront of a pivotal mission. As a key member of our founding team, your role goes beyond technical mastery; you will be a driving force in using AI, ML and other advanced technologies to reshape the way we consume news.",
      details: {
        shares: "5% – 15% Equity",
        location: "Open to candidates across the United States",
        timezone: "PST",
        visa: "Not Available. U.S. citizens or valid work permit holders only",
      },
    },
    {
      id: 3,
      title: "Account Executive",
      type: "Full Time",
      location: "Remote",
      salary: "$150k – $250k",
      description:
        "We are seeking a product-oriented CTO with deep experience in AI and ML to join us at the forefront of a pivotal mission. As a key member of our founding team, your role goes beyond technical mastery; you will be a driving force in using AI, ML and other advanced technologies to reshape the way we consume news.",
      details: {
        shares: "5% – 15% Equity",
        location: "Open to candidates across the United States",
        timezone: "PST",
        visa: "Not Available. U.S. citizens or valid work permit holders only",
      },
      highlighted: true,
    },
  ];

  return (
    <main className="w-full">
      <Header />

      <section className="h-[493px] relative overflow-hidden">
        <div className="w-full h-[840px] left-0 top-0 absolute">
          <div className="w-full h-[839px] left-0 top-0 absolute bg-[#29015a]" />
          <div className="w-full h-[493px] right-0 top-0 absolute bg-cover bg-top bg-[url('/images/hero-background.webp')]" />
        </div>

        <div className="absolute left-1/2 top-[180px] -translate-x-1/2 w-full px-4 md:px-8 max-w-[873px] flex flex-col items-center gap-4">
          <h1 className="text-center text-white text-[40px] sm:text-[45px] md:text-[50px] lg:text-[54px] font-bold font-sf-pro-display leading-[1.1]">
            Careers
          </h1>
          <p className="text-center text-[#c1c3cc] max-w-[873px] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-normal font-sf-pro-display leading-[1.4]">
            We strive to create an inclusive environment where every voice is
            heard and ideas are fostered.
          </p>
        </div>
      </section>

      <section className="bg-[#040420] px-[72px] py-[140px] max-sm:px-4 max-sm:py-16">
        <h2 className="text-white text-[40px] font-bold font-sf-pro-display leading-[44px] mb-[60px]">
          Open Positions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {openPositions.map((position, index) => (
            <div
              key={position.id}
              className={`w-full p-8 ${
                hoveredCard === index ? "bg-[#923cfb]" : "bg-[#1e1e37]"
              } rounded-[40px] flex flex-col items-start overflow-hidden relative`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {hoveredCard === index && (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url('/images/components/small-background-logo.svg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    opacity: 0.8,
                    filter: "brightness(2) contrast(2)",
                  }}
                ></div>
              )}

              <div className="flex flex-col gap-8 flex-1 mb-8 relative z-10">
                <div className="flex flex-wrap gap-[8px]">
                  {[
                    { label: position.type },
                    { label: position.location },
                    { label: position.salary },
                  ].map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className={`h-[40px] px-[16px] rounded-[32px] border ${
                        hoveredCard === index
                          ? "border-white"
                          : "border-[#923dfb]"
                      } inline-flex items-center justify-center whitespace-nowrap`}
                    >
                      <div className="text-[16px] font-medium font-sf-pro-display leading-none text-white">
                        {tag.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-white text-[40px] font-bold font-sf-pro-display leading-[44px]">
                    {position.title}
                  </h3>
                  <p
                    className={`text-[17px] font-normal font-sf-pro-display leading-relaxed ${
                      hoveredCard === index ? "text-white" : "text-[#c1c3cc]"
                    }`}
                  >
                    {position.description}
                  </p>
                  <div
                    className={`text-[17px] font-normal font-sf-pro-display leading-relaxed ${
                      hoveredCard === index ? "text-white" : ""
                    }`}
                  >
                    {!position.highlighted && (
                      <span className="text-[#c1c3cc]">Shares: </span>
                    )}
                    {position.details.shares}
                    <br />
                    {!position.highlighted && (
                      <span className="text-[#c1c3cc]">Location: </span>
                    )}
                    {position.details.location}
                    <br />
                    {!position.highlighted && (
                      <span className="text-[#c1c3cc]">
                        Preferred Timezones:{" "}
                      </span>
                    )}
                    {position.details.timezone}
                    <br />
                    {!position.highlighted && (
                      <span className="text-[#c1c3cc]">Visa Sponsorship: </span>
                    )}
                    {position.details.visa}
                  </div>
                </div>
              </div>

              <Link
                href={`/careers/positions/${position.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <div
                  className={`inline-flex h-[52px] px-11 py-[18px] ${
                    hoveredCard === index ? "bg-white" : "bg-[#35354b]"
                  } rounded-[100px] items-center justify-center relative z-10`}
                >
                  <div
                    className={`text-[16px] font-medium font-sf-pro-display leading-none ${
                      hoveredCard === index ? "text-[#923dfb]" : "text-white"
                    }`}
                  >
                    View details
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CareersContent;
