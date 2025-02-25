"use client";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col items-center gap-4 w-full h-full px-4 md:px-8 pt-[11.25rem] pb-[10rem] bg-[url('/images/hero-background.webp')] bg-cover bg-top max-sm:pt-[6.26rem] max-sm:pb-[3.75rem]">
        <h1 className="font-sf-pro-display font-bold text-center text-white text-[3.375rem] leading-[1.1]">
          Mission
        </h1>
        <p className="font-sf-pro-display font-normal text-center text-[#c1c3cc] max-w-[54.5625rem] text-[1.25rem] sm:text-[1.75rem] leading-[1.4]">
          Our mission is to empower citizens with the tools to navigate bias in the news and shape public sentiment to create a more informed and enlightened society.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
