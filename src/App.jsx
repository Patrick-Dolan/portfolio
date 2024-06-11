import NavBar from "./components/navigation/NavBar";
import Footer from "./components/sections/Footer";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header id="header">
        <NavBar />
      </header>
      <main className="flex-grow">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App;