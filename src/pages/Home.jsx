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
import AboutSection from "../sections/AboutSection";
import Testimonials from "../sections/Testimonials";

const Home = () => {
  return (
    <>
      <GradientBackground />
      <NavBar />
      <Hero />
      <AboutSection />
      <AnimateCounter />
      <ShowcaseSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <CertificationSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
