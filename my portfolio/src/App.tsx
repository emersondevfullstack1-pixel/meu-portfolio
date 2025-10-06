import AboutSection from "./pages/Home/sections/AboutSection/AboutSection";
import HeroSection from "./pages/Home/sections/Hero/HeroSection";
import Navbar from "./components/NavBar/NavBar";
import ProjectsSection from "./pages/Home/sections/ProjectSection/ProjectSection";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  );
};

export default App;
