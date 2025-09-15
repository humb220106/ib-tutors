import "./contact.css"
import { Phone, Mail, MapPin } from "lucide-react"

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>        
          <h1>Get In Touch</h1>
          <p>
            Ready to start your journey to success? Reach out via phone, email, or connect with us through our social platforms.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Contact Information Card */}
          <div className="contact-card">
            <h2>Contact Information</h2>
            <div className="info-item">
              <div className="info-icon">
                <Phone size={22} />
              </div>
              <div className="info-content">
                <h3>Phone Numbers</h3>
                <p>+234 9161933186</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Mail size={22} />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>ibadanprivatetutor@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={22} />
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Ibadan, Nigeria</p>
                <p>Online classes available</p>
              </div>
            </div>
          </div>

          {/* Quick Links Card */}
          <div className="contact-card">
            <h2>Quick Links</h2>
            <div className="quick-links-grid">
              <a
                href="https://wa.me/2347063970942"
                className="quick-link whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-icon">💬</div>
                <span>WhatsApp Chat</span>
              </a>

              <a
                href="mailto:ibadanprivatetutor@gmail.com"
                className="quick-link email"
              >
                <div className="link-icon">📧</div>
                <span>Send Email</span>
              </a>

              <a
                href="https://www.instagram.com/ibprivatetutors?igsh=b2R2cDk4MTlxOW9p"
                className="quick-link instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-icon">📷</div>
                <span>Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/share/18ZKSDSeHX/"
                className="quick-link facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-icon">👥</div>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Office Hours Card */}
          <div className="contact-card">
            <h2>Office Hours</h2>
            <div className="hours-list">
              <div className="hours-item">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 8:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Saturday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Sunday:</span>
                <span>2:00 PM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
