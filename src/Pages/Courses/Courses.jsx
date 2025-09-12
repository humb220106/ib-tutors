import { Clock, Users, MapPin, CheckCircle, GraduationCap, Star } from "lucide-react"
import coursesData from "./Courses.json"
import "./courses.css"


const Courses = () => {

  return (
    <div className="courses-page">
      {/* Hero Section with Head of School Message */}
        <br>
                </br>
                <br>
                </br>

      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="school-badge">
              
                <GraduationCap className="icon" />
                HEAD OF SCHOOL
              </div>
              <h1 className="hero-title">Welcome to Your Journey of Success</h1>
              <div className="message-card">
                <p className="message-text">
                  <span style={{ fontWeight: 600, color: "#111827" }}>Dear Students,</span>
                  <br />
                  It fills me with pride and excitement to welcome you as you prepare for your international immigration
                  exam. Remember, this is not just a test; it&apos;s a stepping stone to a brighter future. The path
                  you&apos;re on may seem challenging, but each hurdle you overcome brings you closer to your dreams.
                </p>
                <div className="message-signature">
                  <p className="signature-name">
                    Peace Emmanuel-Ojo
                    <br />
                    <span className="signature-title">Head of School</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <img
                  src="/teach1.jpg"
                  alt="Peace Emmanuel-Ojo, Head of School"
                  className="hero-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="tutors-badge">IB PRIVATE TUTORS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <div className="courses-container">
          <div className="section-header">
            <h2 className="section-title">Our Comprehensive Test Preparation Programs</h2>
            <p className="section-description">
              Choose from our expertly designed courses to achieve your target scores and unlock your academic potential
            </p>
          </div>

          <div className="courses-grid">
            {coursesData.map((course) => (
              <div key={course.id} className="course-card">
                <div className="card-header">
                  <div className="card-top">
                    <div className={`course-badge ${course.title.toLowerCase()}`}>{course.title}</div>
                    <div className="rating-stars">
                      <Star className="star" />
                      <Star className="star" />
                      <Star className="star" />
                      <Star className="star" />
                      <Star className="star" />
                    </div>
                  </div>
                  <h3 className="card-title">{course.title} Preparation</h3>
                  <p className="card-description">{course.description}</p>
                </div>

                <div className="card-content">
                  <div className="course-details">
                    <div className="detail-item">
                      <Clock className="detail-icon clock" />
                      <span className="detail-label">Duration:</span>
                      <span className="detail-badge">{course.duration}</span>
                    </div>
                    <div className="detail-item">
                      <MapPin className="detail-icon location" />
                      <span className="detail-label">Mode:</span>
                      <span className="detail-badge">{course.mode}</span>
                    </div>
                    <div className="detail-item">
                      <Users className="detail-icon users" />
                      <span className="detail-label">Level:</span>
                      <span className="detail-badge">{course.level}</span>
                    </div>
                  </div>

                  <div className="features-section">
                    <h4 className="features-title">
                      <CheckCircle className="check-icon" />
                      What&apos;s Included:
                    </h4>
                    <ul className="features-list">
                      {course.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <CheckCircle className="feature-check" />
                          <span className="feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="register-button">Register Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>    
    </div>
  )
}

export default Courses

