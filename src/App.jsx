import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <h1 className="text-center text-4xl">Patrick Dolan</h1>
      </header>
      <main className="flex-grow">
        <p className="text-center">Main content.</p>
      </main>
      <Footer />
    </div>
  )
}

export default App;