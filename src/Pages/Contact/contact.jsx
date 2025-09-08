import { useState } from "react"
import "./contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    })
  }

  const courses = ["IELTS", "TOEFL", "GRE", "SAT", "GMAT", "PTE"]
  

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <br/>
           <br/>
            <br/>
          <h1>Get In Touch</h1>
          <p>Ready to start your journey to success? Contact us today to book your free consultation session.</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="course">Course of Interest</label>
                <select id="course" name="course" value={formData.course} onChange={handleChange}>
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals and how we can help you..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn submit-btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2>Contact Information</h2>

            <div className="contact-info-card">
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h3>Phone Numbers</h3>
                  <p>+234 9161933186</p>
                
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>ibadanprivatetutor@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h3>Location</h3>
                  <p>Ibadan, Nigeria</p>
                  <p>Online classes available</p>
                </div>
              </div>
            </div>

            <div className="quick-links">
              <h3>Quick Links</h3>
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

                <a href="" className="quick-link email">
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

            <div className="office-hours">
              <h3>Office Hours</h3>
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
    </div>
  )
}

export default Contact
