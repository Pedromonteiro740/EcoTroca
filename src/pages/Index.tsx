
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Monetization from "@/components/Monetization";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <FeatureSection />
        <HowItWorks />
        <Benefits />
        <Monetization />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
