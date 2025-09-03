import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Navigation/Header"
import Home from "./Pages/Home/Home"
import Courses from "./Pages/Courses/Courses"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/contact"
import Footer from "./components/Footer"

import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
