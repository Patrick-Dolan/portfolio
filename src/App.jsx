import NavBar from "./components/navigation/NavBar";
import Footer from "./components/sections/Footer";
import HeroSection from "./components/sections/HeroSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header id="header">
        <NavBar />
      </header>
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}

export default App;