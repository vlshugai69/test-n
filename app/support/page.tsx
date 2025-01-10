import Header from "../components/header";
import Footer from "../components/footer";

const SupportPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#040420]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow pt-32 px-[72px]">
        <div className="ml-0">
          {/* Support Header - matching problem section styling */}
          <h1 className="w-[1000px] text-white text-[54px] font-bold font-sf-pro-display leading-[59.40px] mb-6">
            Support
          </h1>

          {/* Support Text - removed background, closer to header */}
          <p className="text-[#c1c3cc] text-xl leading-relaxed">
            Need support with our app? Have a feature idea? Please email us at{" "}
            <a
              href="mailto:info@nuprizm.com"
              className="text-white hover:text-blue-400 transition-colors"
            >
              info@nuprizm.com
            </a>{" "}
            and we&apos;ll get back to you shortly.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SupportPage;
