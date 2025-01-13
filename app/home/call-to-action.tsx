import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center px-[4.5rem] py-[7.5rem] max-xs:px-[1rem] max-xs:py-[5rem]">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[#360572]" />
      <div
        className="absolute inset-0 mix-blend-soft-light bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-background.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center gap-8 text-center max-w-[67rem] max-xs:gap-4">
        {/* Heading */}
        <h2 className="text-white font-bold font-sf-pro-display">
          Ready to Transform Your News Experience?
        </h2>

        {/* Subtext */}
        <p className="text-white text-xl font-normal font-sf-pro-display leading-7 opacity-80 max-w-[53.6rem]">
          Nuprizm uses AI to cut through the noise, uncover biases, track
          sentiment, and compare perspectives. Join the conversation with
          ratings, comments, and polls.
        </p>

        {/* App Store Badge */}
        <div className="w-[10rem] h-[5rem] relative overflow-hidden max-xs:mt-[1.5rem]">
          <a
            href="https://apps.apple.com/us/app/nuprizm/id1613109356"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full block"
          >
            <Image
              src="/images/components/app-store-download-button.svg"
              alt="Download on the App Store"
              width={160}
              height={80}
              className="w-[10rem] h-[5rem] object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
