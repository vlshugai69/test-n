import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./home/hero";
import Problem from "./home/problem";
import Solution from "./home/solution";
import HowItWorks from "./home/how-it-works";
import CallToAction from "./home/call-to-action";

const Page = () => {
  return (
    <div className="relative">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Problem Section */}
      <Problem />

      {/* Solution Section */}
      <Solution />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Call to Action Section */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
