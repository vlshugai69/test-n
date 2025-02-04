"use client";

import Header from "../../../components/header";
import Footer from "../../../components/footer";

const AccountExecutivePosition = () => {
  return (
    <main className="w-full">
      <Header />
      
      <div className="min-h-screen bg-[#040420]">
        <div className="h-[144px]" />
        <div className="px-[4.5rem] pb-[140px] max-xs:px-[1rem]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-white text-[40px] sm:text-[45px] md:text-[50px] lg:text-[54px] font-bold font-sf-pro-display leading-[1.1]">
                Account Executive
              </h1>
              <div className="flex flex-wrap gap-2">
                <div className="h-[40px] px-[16px] rounded-[32px] border border-[#923dfb] inline-flex items-center justify-center">
                  <div className="text-white text-[16px] font-medium font-sf-pro-display leading-none">
                    Full Time
                  </div>
                </div>
                <div className="h-[40px] px-[16px] rounded-[32px] border border-[#923dfb] inline-flex items-center justify-center">
                  <div className="text-white text-[16px] font-medium font-sf-pro-display leading-none">
                    Remote
                  </div>
                </div>
                <div className="h-[40px] px-[16px] rounded-[32px] border border-[#923dfb] inline-flex items-center justify-center">
                  <div className="text-white text-[16px] font-medium font-sf-pro-display leading-none">
                    $150k – $250k
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[#c1c3cc] text-[20px] font-normal font-sf-pro-display leading-[1.4]">
              We are seeking a product-oriented CTO with deep experience in AI and ML to join us at the forefront of a pivotal mission. As a key member of our founding team, your role goes beyond technical mastery; you will be a driving force in using AI, ML and other advanced technologies to reshape the way we consume news.
            </p>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-[20px] font-normal font-sf-pro-display leading-[1.4]">
                Responsibilities
              </h2>
              <ul className="list-disc marker:text-[0.75em] pl-8 text-[#c1c3cc] text-[18px] font-normal font-sf-pro-display leading-[1.4] [&>li]:mt-2">
                <li className="marker:align-middle">Lead the implementation of AI to support our feature roadmap.</li>
                <li className="marker:align-middle">Architect and scale our technical infrastructure to support a rapidly growing user base.</li>
                <li className="marker:align-middle">Collaborate closely with the founder to align the technical roadmap with overall business strategy.</li>
                <li className="marker:align-middle">Implement new features by committing code and reviewing PRs, while managing technical debt.</li>
                <li className="marker:align-middle">Maintain server uptime to guarantee consistent, reliable access to the platform.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-[20px] font-normal font-sf-pro-display leading-[1.4]">
                Qualifications
              </h2>
              <ul className="list-disc marker:text-[0.75em] pl-8 text-[#c1c3cc] text-[18px] font-normal font-sf-pro-display leading-[1.4] [&>li]:mt-2">
                <li className="marker:align-middle">Proven experience in AI, ML, and/or NLP with a strong portfolio of projects that demonstrate your expertise.</li>
                <li className="marker:align-middle">A hands-on leader with a product-oriented mindset and experience in startup environments.</li>
                <li className="marker:align-middle">Strategic thinker with the ability to translate complex technical concepts into actionable plans and the flexibility to shift focus as the business demands.</li>
                <li className="marker:align-middle">Excellent and responsive communicator with the ability to engage effectively with all stakeholders.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-[20px] font-normal font-sf-pro-display leading-[1.4]">
                Preferred
              </h2>
              <ul className="list-disc marker:text-[0.75em] pl-8 text-[#c1c3cc] text-[18px] font-normal font-sf-pro-display leading-[1.4] [&>li]:mt-2">
                <li className="marker:align-middle">5+ years as a senior+ level developer.</li>
                <li className="marker:align-middle">3+ years as a technical and/or research lead.</li>
                <li className="marker:align-middle">Experience with full-stack development and cloud architectures.</li>
                <li className="marker:align-middle">Prior startup experience where you have successfully scaled technology.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white text-[20px] font-normal font-sf-pro-display leading-[1.4]">
                Benefits
              </h2>
              <ul className="list-disc marker:text-[0.75em] pl-8 text-[#c1c3cc] text-[18px] font-normal font-sf-pro-display leading-[1.4] [&>li]:mt-2">
                <li className="marker:align-middle">5% - 15% equity</li>
                <li className="marker:align-middle">Fully remote, with regular travel for collaboration</li>
                <li className="marker:align-middle">Flexible vacation</li>
                <li className="marker:align-middle">Company-supplied Apple M2 laptop</li>
                <li className="marker:align-middle">Opportunity to shape the future of digital news</li>
              </ul>
            </div>

            <a 
              href="mailto:info@nuprizm.com?subject=Account Executive Position Application"
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

export default AccountExecutivePosition;