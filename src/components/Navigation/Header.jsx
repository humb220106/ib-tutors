import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* Brand / Logo on the extreme left */}
        <div className="nav-brand">
          <Link to="/" className="logo">
            {/* Replace with your image */}
            <img src="/logo.jpg" alt="IB Private Tutors Logo" className="logo-img" />
            <div className="brand-text">
              <span className="brand-name">IB PRIVATE TUTORS</span>
              <span className="brand-tagline">...knowledge to go places</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className={`nav-link ${location.pathname === "/courses" ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </Link>
          <Link
            to="/about"
            className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger menu for mobile */}
        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
