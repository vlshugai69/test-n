"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Team = () => {
  const team = [
    {
      name: "Tomás Sidenfaden",
      role: "Founder & CEO",
      background: "bg-[#923cfb]",
      experience: [
        "Hardware PM for Guitar Center's $50m private technology brands",
        "7 years full-stack + native mobile software engineer",
        "Contributor at Foreign Policy, Le Monde, Arc Digital, The Book of Mars",
      ],
    },
    {
      name: "Pascal Simpkins",
      role: "CTO",
      background: "bg-[#61cf86]",
      experience: [
        "Drove +18% global revenue at EPCVIP through AI initiatives",
        "Created computer vision system that delivered $20m in savings",
        "Managed large-scale projects for Brain Corp, DHL, Deutsche Bahn",
      ],
    },
    {
      name: "Jeff Chien",
      role: "Advisor",
      background: "bg-[#ffcd43]",
      experience: [
        "20+ years in AI-driven research and market intelligence",
        "Digital transformation for Google, DoD, FBI, Dell, Intel, Gates Foundation",
        "Strategic technical advisor for Data Transparency Act of 2022",
      ],
    },
  ];

  return (
    <section className="bg-[#040420] overflow-hidden pb-[5rem] md:py-20">
      <div className="max-w-[81rem] mx-auto max-sm:px-[1rem]">
        <div className="flex justify-between items-center mb-10 sm:mb-16">
          <h2 className="text-white font-bold font-sf-pro-display">
            Meet Our Team
          </h2>
          <div className="hidden sm:flex gap-2">
            <button className="swiper-button-prev !static !w-12 !h-12 !m-0 !bg-[#1e1e37] hover:!bg-[#923cfb] transition-colors !rounded-full flex items-center justify-center after:!hidden">
              <img
                src="/images/components/arrow-right.svg"
                alt="Previous"
                className="w-6 h-6 transform rotate-180"
              />
            </button>
            <button className="swiper-button-next !static !w-12 !h-12 !m-0 !bg-[#1e1e37] hover:!bg-[#923cfb] transition-colors !rounded-full flex items-center justify-center after:!hidden">
              <img
                src="/images/components/arrow-right.svg"
                alt="Next"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, EffectFade]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          speed={500}
          slidesPerView={1}
          loop={true}
          className="!overflow-visible"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex sm:flex-row flex-col gap-5 cursor-grab">
                {/* Main Card */}
                <div className="bg-white w-full rounded-[1.5rem] sm:max-w-[40rem] sm:rounded-[2rem] p-6 sm:p-8 sm:flex-[2]">
                  <div
                    className={`relative ${member.background} w-full h-auto rounded-[1.25rem] md:rounded-[2rem] overflow-hidden mb-6 sm:mb-8`}
                  >
                    <img
                      className="w-full h-auto bottom-0 left-0 object-cover"
                      src={`/images/${member.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}.webp`}
                      alt={member.name}
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-[1.5rem] font-normal md:text-[2.5rem] sm:font-bold font-sf-pro-display leading-[100%] mb-[0.2rem]">
                        {member.name}
                      </h3>
                      <p className="text-[#777777] text-lg md:text-xl font-normal font-sf-pro-display">
                        {member.role}
                      </p>
                    </div>
                    <a
                      href="#"
                      target="_blank"
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-[#040420] rounded-[50%] md:rounded-[50%] flex items-center justify-center"
                    >
                      <img
                        src="/images/components/linkedin-icon.svg"
                        alt="LinkedIn"
                        className="w-[1.25rem] h-[1.25rem]"
                      />
                    </a>
                  </div>
                </div>

                {/* Right Content */}
                <div className="sm:flex-1 flex flex-col gap-5 justify-between">
                  {/* Small Cards - Desktop Only */}
                  <div className="hidden sm:flex gap-5">
                    {[(index + 1) % team.length, (index + 2) % team.length].map(
                      (idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-[#1e1e37] rounded-[1rem] p-6"
                        >
                          <div
                            className={`relative ${team[idx].background} rounded-[0.875rem] max-h-[13.25rem] overflow-hidden mb-[1.5rem]`}
                          >
                            <img
                              className="h-auto object-cover"
                              src={`/images/${team[idx].name
                                .toLowerCase()
                                .replace(/\s+/g, "-")}.webp`}
                              alt={team[idx].name}
                            />
                          </div>
                          <h3 className="text-white leading-[100%] text-[1.5rem] font-medium mb-[0.25rem]">
                            {team[idx].name}
                          </h3>
                          <p className="text-[#c1c3cc] text-xl">
                            {team[idx].role}
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  {/* Experience Bullets */}
                  <ul className="text-white text-lg md:text-[1.75rem] max-w-[38rem] pl-[0.8rem] space-y-1.2 mb-4 md:mb-0">
                    {member.experience.map((item, idx) => (
                      <li
                        key={idx}
                        className="pl-8 relative before:content-[''] block max-sm:pl-4 before:w-[0.375rem] before:h-[0.375rem] before:bg-white before:rounded-full before:absolute before:left-[0.75rem] before:top-[0.5em] max-sm:before:left-[0.5rem] max-sm:before:w-[0.25rem] max-sm:before:h-[0.25rem] max-sm:before:top-[0.7em] max-sm:before:left-[0.1em]"
                      >
                        <span className="text-white leading-[140%] font-normal text-lg md:text-[1.75rem] max-sm:text-[1.25rem]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Navigation Buttons - Mobile Only */}
                  <div className="flex sm:hidden justify-center gap-4">
                    <button className="swiper-button-prev !static !w-12 !h-12 !m-0 !bg-[#1e1e37] hover:!bg-[#923cfb] !rounded-full flex items-center justify-center after:!hidden transition duration-300">
                      <img
                        src="/images/components/arrow-right.svg"
                        alt="Previous"
                        className="w-6 h-6 transform rotate-180"
                      />
                    </button>
                    <button className="swiper-button-next !static !w-12 !h-12 !m-0 !bg-[#1e1e37] hover:!bg-[#923cfb] !rounded-full flex items-center justify-center after:!hidden transition duration-300">
                      <img
                        src="/images/components/arrow-right.svg"
                        alt="Next"
                        className="w-6 h-6"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
