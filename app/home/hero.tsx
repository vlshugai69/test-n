import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen max-md:min-h-[auto] flex max-md:flex-col items-center max-sm:overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[#29015a]" />
      <div
        className="absolute w-full h-full right-0 bg-cover bg-top"
        style={{
          backgroundImage: "url('/images/home-hero-bg.webp')",
        }}
      />

      {/* Hero Content */}
      <div className="flex flex-col items-center w-full px-[4.5rem] m-auto max-sm:px-[1rem]">
        <div className="relative z-10 flex flex-col justify-start items-start w-full pt-[11.25rem] pb-[4.13rem] max-sm:items-center max-xs:pt-[6.56rem] max-xs:pb-[0]">
          <div className="flex flex-col gap-8 w-full max-sm:items-center max-sm:gap-6">
            {/* Main Heading and Supporting Text */}
            <div className="max-w-[32.813rem] w-full flex flex-col gap-4 max-sm:text-center">
              <h1 className="text-white font-black font-sf-pro-display max-sm:font-bold">
                Powering the Search for Truth
              </h1>
              <p className="text-[#c1c3cc] text-[1.75rem] font-normal font-sf-pro-display leading-[140%] max-sm:text-[1.25rem]">
                Dissect bias in the news <br /> with AI and public sentiment.
              </p>
            </div>

            {/* App Store Badge */}
            <div>
              <Image
                src="/images/components/app-store-download-button.webp"
                alt="Download on the App Store"
                width={160}
                height={80}
                className="w-[10rem] h-[5rem] object-contain"
              />
            </div>

            {/* Profile Avatars and Supporting Message */}
            <div className="flex flex-col items-start gap-3 mt-[3.94rem] max-sm:items-center max-sm:mt-[1rem]">
              {/* Avatars and Count */}
              <div className="flex items-center gap-4 max-xs:gap-2">
                {/* Avatars */}
                <div className="flex -space-x-2">
                  <Image
                    src="/images/avatar1.png"
                    alt="User 1"
                    width={40}
                    height={40}
                    className="rounded-full w-[2.5rem] h-[2.5rem] max-xs:w-[2rem] max-xs:h-[2rem]"
                  />
                  <Image
                    src="/images/avatar2.png"
                    alt="User 2"
                    width={40}
                    height={40}
                    className="rounded-full w-[2.5rem] h-[2.5rem] max-xs:w-[2rem] max-xs:h-[2rem]"
                  />
                  <Image
                    src="/images/avatar3.png"
                    alt="User 3"
                    width={40}
                    height={40}
                    className="rounded-full w-[2.5rem] h-[2.5rem] max-xs:w-[2rem] max-xs:h-[2rem]"
                  />
                </div>

                {/* Count */}
                <span className="text-white text-[1.25rem] font-semibold max-xs:text-[1.125rem] max-xs:font-normal">
                  8k+
                </span>
              </div>

              {/* Text with Green Dot */}
              <div className="flex items-center gap-2">
                {/* Green Dot */}
                <div className="w-2 h-2 bg-[#62d086] rounded-full" />
                <p className="text-white text-[1.125rem] font-normal">
                  Your voice matters. Join today!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Device Image */}
        <div className="absolute bottom-[0] right-[13.438rem] max-sm:w-full max-sm:relative max-sm:right-[0] max-xs:bottom-[-3.5rem] max-xs:-mt-8">
          <Image
            src="/images/device-hero.png"
            alt="Device showcasing the app"
            width={432}
            height={686}
            className="object-cover w-full max-w-[27rem] h-auto xl:w-[27rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
