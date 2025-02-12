"use client";

import Header from "../../../components/header";
import Footer from "../../../components/footer";

const XInternPosition = () => {
  return (
    <main className="w-full">
      <Header />
      
      <div className="min-h-screen bg-[#040420]">
        <div className="h-[144px]" /> {/* 72px header height + 72px spacing */}
        <div className="px-[4.5rem] pb-[140px] max-xs:px-[1rem]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-white text-[40px] sm:text-[45px] md:text-[50px] lg:text-[54px] font-bold font-sf-pro-display leading-[1.1]">
                Social Media Intern - X/Twitter
              </h1>
              <div className="flex flex-wrap gap-2">
                <div className="h-[40px] px-[16px] rounded-[32px] border border-[#923dfb] inline-flex items-center justify-center">
                  <div className="text-white text-[16px] font-medium font-sf-pro-display leading-none">
                    Part Time
                  </div>
                </div>
                <div className="h-[40px] px-[16px] rounded-[32px] border border-[#923dfb] inline-flex items-center justify-center">
                  <div className="text-white text-[16px] font-medium font-sf-pro-display leading-none">
                    Remote
                  </div>
                </div>
                <div className="h-[40px] px-[16px] rounded-[32px] border border-[#923dfb] inline-flex items-center justify-center">
                  <div className="text-white text-[16px] font-medium font-sf-pro-display leading-none">
                    Intern
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[#c1c3cc] text-[20px] font-normal font-sf-pro-display leading-[1.4]">
              As a Social Media Intern for our X account, you will be responsible for crafting thought-provoking tweets in an established format and engaging with our followers and
              other accounts. You should be an active user of the platform, and keenly aware of the topics driving daily conversations about important social and political issues. Our
              interns are expected to have a commanding grasp on the English language and the capability to identify the subtle use of language, framing, and sentiment that drives
              narratives in news media and online. <strong>Note: this is an unpaid role for a 90 day internship. We accept applications on a rolling basis for each internship period.</strong>
            </p>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-[20px] font-normal font-sf-pro-display leading-[1.4]">
                Responsibilities
              </h2>
              <ul className="list-disc marker:text-[0.75em] pl-8 text-[#c1c3cc] text-[18px] font-normal font-sf-pro-display leading-[1.4] [&>li]:mt-2">
                <li className="marker:align-middle">Curate and share insightful tweets and threads about current events, media bias, and Nuprizm’s offerings.</li>
                <li className="marker:align-middle">Engage with followers, thought leaders, and news organizations to foster meaningful conversations.</li>
                <li className="marker:align-middle">Monitor trends, influencers, and breaking news to ensure timely and relevant content.</li>
                <li className="marker:align-middle">Analyze X analytics to measure engagement and evolve our strategy.</li>
                <li className="marker:align-middle">A 10 hour time commitment each week (~2 hours per day).</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-[20px] font-normal font-sf-pro-display leading-[1.4]">
                Qualifications
              </h2>
              <ul className="list-disc marker:text-[0.75em] pl-8 text-[#c1c3cc] text-[18px] font-normal font-sf-pro-display leading-[1.4] [&>li]:mt-2">
                <li className="marker:align-middle">Keen interest in news, politics, or media.</li>
                <li className="marker:align-middle">Strong vocabulary and command of the English language.</li>
                <li className="marker:align-middle">Excellent writing and communication skills, with an understanding of X’s character limits.</li>
                <li className="marker:align-middle">Familiarity with X trends, dynamics, and best practices.</li>
                <li className="marker:align-middle">Ability to create engaging, concise, and impactful content.</li>
                <li className="marker:align-middle">Self-starter with the ability to manage deadlines.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-[20px] font-normal font-sf-pro-display leading-[1.4]">
                Preferred
              </h2>
              <ul className="list-disc marker:text-[0.75em] pl-8 text-[#c1c3cc] text-[18px] font-normal font-sf-pro-display leading-[1.4] [&>li]:mt-2">
                <li className="marker:align-middle">College students studying media, communications, journalism, or artifical intelligence.</li>
                <li className="marker:align-middle">Experience creating content for a social account on X or other platforms.</li>
                <li className="marker:align-middle">Experience with content creation tools like Figma, Adobe, Canva, Capcut, etc.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-[20px] font-normal font-sf-pro-display leading-[1.4]">
                Benefits
              </h2>
              <ul className="list-disc marker:text-[0.75em] pl-8 text-[#c1c3cc] text-[18px] font-normal font-sf-pro-display leading-[1.4] [&>li]:mt-2">
                <li className="marker:align-middle">Fully remote</li>
                <li className="marker:align-middle">Flexible working time</li>
                <li className="marker:align-middle">Opportunity to shape the future of digital news</li>
              </ul>
            </div>

            <a 
              href="mailto:info@nuprizm.com?subject=Social Media Intern - X Application"
              className="mt-8 h-[52px] px-11 py-[18px] bg-[#35354b] rounded-[100px] text-white text-[16px] font-medium font-sf-pro-display leading-none hover:bg-white hover:text-[#923dfb] transition-colors self-start inline-flex items-center justify-center"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default XInternPosition;