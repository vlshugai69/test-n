"use client";

import React from "react";
import Header from "./../components/header";
import Footer from "./../components/footer";
import CallToAction from "./../components/call-to-action";
import AboutHero from "./about-hero";
import OriginStory from "./origin-story";
import Team from "./team";

const AboutUsContent = () => {
  return (
    <main className="w-full bg-[#040420]">
      <Header />
      <AboutHero />
      <OriginStory />
      <Team />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default AboutUsContent;
