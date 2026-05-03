import Hero from "./_components/Hero";
import AboutPreview from "./_components/AboutPreview";
import Services from "./_components/Services";
import Destinations from "./_components/Destinations";
import WhyChooseUs from "./_components/WhyChooseUs";
import ValuesPreview from "./_components/ValuesPreview";
import FinalCTA from "./_components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <Destinations />
      {/* <WhyChooseUs /> */}
      <ValuesPreview />
      <FinalCTA />
    </>
  );
}
