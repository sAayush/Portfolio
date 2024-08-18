import React from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
