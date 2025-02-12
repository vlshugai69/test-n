"use client";

import Header from "../../../components/header";
import Footer from "../../../components/footer";

const GrowthHackerPosition = () => {
  return (
    <main className="w-full">
      <Header />
      
      <div className="min-h-screen bg-[#040420]">
        <div className="h-[144px]" /> {/* 72px header height + 72px spacing */}
        <div className="px-[4.5rem] pb-[140px] max-xs:px-[1rem]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-white text-[40px] sm:text-[45px] md:text-[50px] lg:text-[54px] font-bold font-sf-pro-display leading-[1.1]">
                Growth Hacker
              </h1>
              <div className="flex flex-wrap gap-2">
                <div className="h-[40px] px-[16px] rounded-[32px] border border-[#923dfb] inline-flex items-center justify-center">
                  <div className="text-white text-[16px] font-medium font-sf-pro-display leading-none">
                    Full Time
                  </div>
                </div>
                <div className="h-[40px] px-[16px] rounded-[32px] border border-[#923dfb] inline-flex items-center justify-center">
                  <div className="text-white text-[16px] font-medium font-sf-pro-display leading-none">
                    Remote or Los Angeles
                  </div>
                </div>
                <div className="h-[40px] px-[16px] rounded-[32px] border border-[#923dfb] inline-flex items-center justify-center">
                  <div className="text-white text-[16px] font-medium font-sf-pro-display leading-none">
                    $100k – $150k
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[#c1c3cc] text-[20px] font-normal font-sf-pro-display leading-[1.4]">
              We are seeking an experienced and innovative Growth Hacker to grow our business from thousands to millions of users. You will be responsible for laying the foundations of an 
              innovative, efficient, and effective GTM strategy drawn from a deep well of experience scaling early stage B2C companies. As a prospector, you are equally comfortable driving
              improvements to our user experience as you are automating complex workflows to improve top-of-funnel acquisition tactics. You have a keen understanding of the dynamics of modern
              social platforms and the behavior and actions that their respective algorithms reward. You are an early adopter, actively experimenting with the latest AI tools to incorporate
              and supercharge your workflows. You are a voracious consumer of the news and appreciate how bias in media and a broken social experience hobble society&apos;s capacity to solve 
              important social and political problems. You&apos;re a self-starter and you don&apos;t need to be told what to do or how to do it. This role will have a large degree of autonomy and 
              latitude and we will expect you to use it.
            </p>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-[20px] font-normal font-sf-pro-display leading-[1.4]">
                Responsibilities
              </h2>
              <ul className="list-disc marker:text-[0.75em] pl-8 text-[#c1c3cc] text-[18px] font-normal font-sf-pro-display leading-[1.4] [&>li]:mt-2">
                <li className="marker:align-middle">Experiment with unconventional growth tactics to rapidly test hypotheses and drive results.</li>
                <li className="marker:align-middle">Collaborate with marketing, product, and engineering teams to improve the overall acquisition funnel and increase conversion rates.</li>
                <li className="marker:align-middle">Leverage analytics tools to track performance, optimize campaigns, and measure impact.</li>
                <li className="marker:align-middle">Automate workflows and campaigns by scratch or through the use of reliable third party tools.</li>
                <li className="marker:align-middle">Identify drop-off points and inefficiencies in the user journey, utilizing data to create actionable insights.</li>
                <li className="marker:align-middle">Manage and mentor a team of interns focused on user acquisition across platforms like TikTok, X, Facebook, and Instagram.</li>
                <li className="marker:align-middle">Regular travel for in-person collaboration for candidates outside Southern California.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-[20px] font-normal font-sf-pro-display leading-[1.4]">
                Qualifications
              </h2>
              <ul className="list-disc marker:text-[0.75em] pl-8 text-[#c1c3cc] text-[18px] font-normal font-sf-pro-display leading-[1.4] [&>li]:mt-2">
                <li className="marker:align-middle">Proven experience as a growth hacker, specifically in B2C environments, with a strong portfolio of successful campaigns.</li>
                <li className="marker:align-middle">Expertise in identifying and analyzing user behavior data to optimize funnels and drive growth.</li>
                <li className="marker:align-middle">Creative and strategic thinker who thrives on solving complex problems with unconventional approaches.</li>
                <li className="marker:align-middle">Proficiency with analytics tools (e.g., Google Analytics, Mixpanel, etc.) and A/B testing platforms.</li>
                <li className="marker:align-middle">Technical proficiency and willingness to autonomously extract data and connect key workflows for the business.</li>
                <li className="marker:align-middle">Deep understanding of the news media ecosystem and keen insights into the accounts and topics that drive the public square.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-[20px] font-normal font-sf-pro-display leading-[1.4]">
                Preferred
              </h2>
              <ul className="list-disc marker:text-[0.75em] pl-8 text-[#c1c3cc] text-[18px] font-normal font-sf-pro-display leading-[1.4] [&>li]:mt-2">
                <li className="marker:align-middle">5+ years as a growth hacker working for early stage startups.</li>
                <li className="marker:align-middle">Experience taking a B2C business from hundreds to hundreds of thousands or millions of users.</li>
                <li className="marker:align-middle">Marketing experience with a major social platform like Facebook, Instagram, TikTok, or X/Twitter.</li>
                <li className="marker:align-middle">An aggressive, opinionated, and disciplined disposition capable of defining and achieving lofty and self-imposed metrics for success.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-[20px] font-normal font-sf-pro-display leading-[1.4]">
                Benefits
              </h2>
              <ul className="list-disc marker:text-[0.75em] pl-8 text-[#c1c3cc] text-[18px] font-normal font-sf-pro-display leading-[1.4] [&>li]:mt-2">
                <li className="marker:align-middle">2% - 4% equity</li>
                <li className="marker:align-middle">Fully remote, with regular travel for collaboration</li>
                <li className="marker:align-middle">Flexible vacation</li>
                <li className="marker:align-middle">Company-supplied Apple M2 laptop</li>
                <li className="marker:align-middle">Opportunity to shape the future of digital news</li>
              </ul>
            </div>

            <a 
              href="mailto:info@nuprizm.com?subject=CTO Position Application"
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

export default GrowthHackerPosition;