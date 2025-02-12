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
      title: "Growth Hacker",
      type: "Full Time",
      location: "Remote",
      salary: "$100k – $150k",
      description:
        "We are seeking an experienced and innovative Growth Hacker to drive customer acquisition and retention in order to grow our business from hundreds to hundreds of thousands of users. You have a proven track of zero to one growth in B2C and need little guidance.",
      details: {
        shares: "2% – 4% Equity",
        location: "Open to candidates across the United States",
        timezone: "PST",
        visa: "Not Available. U.S. citizens or valid work permit holders only",
      },
    },
    {
      id: 2,
      title: "X Intern",
      type: "Part Time",
      location: "Remote",
      salary: "Intern",
      description:
        "As a Social Media Intern for X, you will be responsible for crafting thought-provoking tweets in an established format and engaging with our followers, other accounts, and influencers on the platform. This is an excellent opportunity for students passionate about journalism, politics, and social media.",
      details: {
        shares: "No Equity",
        location: "Open to candidates across the United States",
        timezone: "PST",
        visa: "Not Available. U.S. citizens or valid work permit holders only",
      },
    },
    {
      id: 3,
      title: "Instagram Intern",
      type: "Part Time",
      location: "Remote",
      salary: "Intern",
      description:
        "We are looking for a creative, detail-oriented Instagram Intern who will help us build our brand on Instagram by creating engaging content, interacting with our community, and assisting in developing social media strategies. You will work closely with the founder and marketing advisors to expand our reach and engage with our growing audience.",
      details: {
        shares: "No Equity",
        location: "Open to candidates across the United States",
        timezone: "PST",
        visa: "Not Available. U.S. citizens or valid work permit holders only",
      },
    },
    {
      id: 4,
      title: "TikTok Intern",
      type: "Part Time",
      location: "Remote",
      salary: "Intern",
      description:
        "We are looking for a creative and enthusiastic TikTok Social Media Intern to help us craft engaging and informative short-form content. You'll work directly with the founder and advisors to create compelling TikTok videos that align with Nuprizm's mission.",
      details: {
        shares: "No Equity",
        location: "Open to candidates across the United States",
        timezone: "PST",
        visa: "Not Available. U.S. citizens or valid work permit holders only",
      },
    },
    {
      id: 5,
      title: "Facebook Intern",
      type: "Part Time",
      location: "Remote",
      salary: "Intern",
      description:
        "As a Facebook Social Media Intern, you'll assist in developing content that engages our growing Facebook community. You will collaborate with the founder and team to create posts that inform, inspire, and provoke thoughtful discussion.",
      details: {
        shares: "No Equity",
        location: "Open to candidates across the United States",
        timezone: "PST",
        visa: "Not Available. U.S. citizens or valid work permit holders only",
      },
    }
  ];

  return (
    <main className="w-full">
      <Header />

<section className="h-[493px] max-sm:h-[700px] relative overflow-hidden">
  <div className="w-full h-[840px] left-0 top-0 absolute">
    <div className="w-full h-[839px] left-0 top-0 absolute bg-[#29015a]" />
    <div className="w-full h-[493px] max-sm:h-[700px] right-0 top-0 absolute bg-cover bg-top bg-[url('/images/hero-background.webp')]" />
  </div>

  <div className="absolute w-full top-[180px] max-sm:top-[120px] px-[72px] max-sm:px-4">
    <h1 className="text-center text-white text-[40px] sm:text-[45px] md:text-[50px] lg:text-[54px] font-bold font-sf-pro-display leading-[1.1] mb-4">
      Careers
    </h1>
    <p className="text-center text-[#c1c3cc] text-[17px] sm:text-[1.25rem] font-normal font-sf-pro-display leading-relaxed">
      At Nuprizm our work is fueled by our mission to help people better understand the world around them. As an early-stage startup, we run lean and tight. Our team members are resourceful, courageous, and relentlessly optimistic. We recognize the controversial nature of our space, which is why we bring our work selves to work and check our problems at the door. We know we won&apos;t always get things right and are brave enough to acknowledge and learn from our mistakes. If this resonates with you, apply to join our team! Even if we don&apos;t have an open role right now, if you believe in our mission and excel in your domain, we&apos;d love to hear from you.
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
                    <span className="text-[#c1c3cc]">Shares: </span>
                    {position.details.shares}
                    <br />
                    <span className="text-[#c1c3cc]">Location: </span>
                    {position.details.location}
                    <br />
                    <span className="text-[#c1c3cc]">
                    Preferred Timezones:{" "}
                    </span>
                    {position.details.timezone}
                    <br />
                    <span className="text-[#c1c3cc]">Visa Sponsorship: </span>
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