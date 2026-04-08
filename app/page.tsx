import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import WhyChooseUs from "./components/WhyChooseUs";
import ValuesPreview from "./components/ValuesPreview";
import FinalCTA from "./components/FinalCTA";

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
