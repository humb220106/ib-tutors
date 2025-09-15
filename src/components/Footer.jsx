import "./Footer.css"
import { Phone, Mail, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-section">
            <div className="footer-logo">
           
              <img  
                src="/logo.jpg"   
                alt="IB Private Tutors Logo" 
                className="footer-logo-img"
              />
              <div className="logo-text">
                <span className="logo-main">IB PRIVATE TUTORS</span>
                <span className="logo-sub">...knowledge to go places</span>
              </div>
            </div>
            <p>
              Empowering students to achieve their academic goals through personalized tutoring and expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p><Phone size={16} style={{marginRight: 6, verticalAlign: "middle"}} />+234 9161933186</p>
              <p><Mail size={16} style={{marginRight: 6, verticalAlign: "middle"}} />ibadanprivatetutor@gmail.com</p>
              <p><Instagram size={16} style={{marginRight: 6, verticalAlign: "middle"}} />@ibprivatetutors</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/share/18ZKSDSeHX/" className="social-link">Facebook</a>
              <a href="https://www.instagram.com/ibprivatetutors?igsh=b2R2cDk4MTlxOW9p" className="social-link">Instagram</a>
              <a href="https://wa.me/2347063970942" className="social-link">WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>&copy; 2025 IB Private Tutors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
