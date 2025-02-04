"use client";

const OriginStory = () => {
  const stats = [
    {
      number: "5,000+",
      label: "Daily Articles Analyzed",
    },
    {
      number: "40%",
      label: "Misinformation Reduction",
    },
    {
      number: "200+",
      label: "News Categories Covered",
    },
  ];

  return (
    <section className="bg-[#040420] h-[54rem] max-xl:h-auto px-[4.5rem] pt-[8.75rem] pb-[2.94rem] max-sm:px-[1rem] max-sm:py-[5rem]">
      <div className="flex flex-col max-w-[81rem] m-auto">
        <h2 className="w-[28.75rem] max-md:w-full text-white font-bold font-sf-pro-display leading-[3.7125rem] max-md:leading-[2.75rem] max-sm:leading-[2.2rem] mb-[2.5rem]">
          Origin Story
        </h2>

        <div className="flex col-gap-[11.5rem] justify-between max-sm:flex-col">
          {/* Text Content */}
          <div className="max-w-[50.19rem] w-full flex flex-col gap-[1rem]">
            <p className="text-[#c1c3cc] text-[1.75rem] max-md:text-[1.5rem] max-sm:text-[1.25rem] font-normal font-sf-pro-display leading-[2.45rem] max-md:leading-[2.1rem] max-sm:leading-[1.75rem]">
              Social platforms once promised connection and community, but their
              shift toward engagement-first models deeply impacted news media.
              Publishers, driven by social media incentives, prioritized
              sensationalism, leading to clickbait headlines, biased framing,
              and eroded trust.
            </p>
            <p className="text-[#c1c3cc] text-[1.75rem] max-md:text-[1.5rem] max-sm:text-[1.25rem] font-normal font-sf-pro-display leading-[2.45rem] max-md:leading-[2.1rem] max-sm:leading-[1.75rem]">
              Nuprizm was created to restore transparency and accountability in
              journalism. Using AI and public sentiment analysis, we uncover
              bias and elevate truth, empowering people to navigate the media
              landscape with clarity and trust.
            </p>
            <p className="text-[#c1c3cc] text-[1.75rem] max-md:text-[1.5rem] max-sm:text-[1.25rem] font-normal font-sf-pro-display leading-[2.45rem] max-md:leading-[2.1rem] max-sm:leading-[1.75rem]">
              Social platforms once promised connection and community, but their
              shift toward engagement-first models deeply impacted news media.
              Publishers, driven by social media incentives, prioritized
              sensationalism, leading to clickbait headlines, biased framing,
              and eroded trust.
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
