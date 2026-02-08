import CertificationSection from "../sections/CertificationSection";
import NavBar from "../components/NavBar";
import Contact from "../sections/Contact";
import ExperienceSection from "../sections/ExperienceSection";
import FeatureCards from "../sections/FeatureCards";
import Hero from "../sections/Hero";
import ShowcaseSection from "../sections/ShowcaseSection";
import TechStack from "../sections/TechStack";
import Footer from "../sections/Footer";
import GradientBackground from "../components/GradientBackground";
import AnimateCounter from "../components/AnimateCounter";

const Home = () => {
  return (
    <>
      <GradientBackground />
      <NavBar />
      <Hero />
      <AnimateCounter />
      <ShowcaseSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <CertificationSection />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
