import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaDollarSign, FaChalkboardTeacher, FaChartLine } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
  /* ============================ */
  /* STATES */
  /* ============================ */
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [index, setIndex] = useState(0) // ✅ for hero slideshow

  /* ============================ */
  /* DATA */
  /* ============================ */
  const successStories = [
    {
      name: "Oluchi Ogoke",
      exam: "IELTS",
      score: "Band 8.5",
      story:
        "IB Tutors helped me achieve my dream score! The personalized approach and expert guidance made all the difference in my preparation.",
      image: "/professional-woman-smiling.png",
    },
    {
      name: "Tobilola",
      exam: "TOEFL",
      score: "115/120",
      story:
        "Thanks to the comprehensive training program, I scored 115 on TOEFL and got admission to my dream university in the US.",
      image: "/tobilola.jpg",
    },
    {
      name: "Mercy Pauline",
      exam: "GRE",
      score: "325/340",
      story:
        "The structured approach and practice tests helped me master both verbal and quantitative sections. Highly recommended!",
      image: "/placeholder-nlgjl.png",
    },
    {
      name: "Kehinde",
      exam: "SAT",
      score: "Band ",
      story:
        "The tutors understood my weaknesses and created a personalized study plan that boosted my IELTS score significantly.",
      image: "/placeholder-j6mvk.png",
    },
    {
      name: "Testimony Olufemi",
      exam: "IELTS",
      score: "Band 8.0",
      story:
        "The analytical approach and mock tests prepared me perfectly for the GMAT. Now I'm pursuing my MBA at a top business school.",
      image: "/test.jpg",
    },
    {
      name: "Mariam",
      exam: "SELT",
      score: "B1",
      story:
        "The speaking practice sessions were incredible. I gained confidence and achieved my target PTE score for immigration.",
      image: "/Mariam.jpg",
    },
  ]

  const stats = [
    { number: "12+", label: "Years of Experience" },
    { number: "5000+", label: "Successful Students" },
    { number: "10,500+", label: "Hours of Training" },
    { number: "95%", label: "Success Rate" },
  ]

  const benefits = [
    {
      title: "Flexible & Affordable",
      desc: "Flexible and affordable tutoring options tailored to your needs.",
      icon: <FaDollarSign className="benefit-icon" />,
    },
    {
      title: "Expert Tutors",
      desc: "Experienced tutors offering personalized teaching for every student.",
      icon: <FaChalkboardTeacher className="benefit-icon" />,
    },
    {
      title: "Proven Success",
      desc: "Proven success in academic growth and IELTS preparation.",
      icon: <FaChartLine className="benefit-icon" />,
    },
    {
      icon: "⚡",
      title: "Rapid Results",
      desc: "Accelerated learning techniques that deliver measurable improvements in record time.",
    },
  ]

  const courses = [
    { name: "IELTS", color: "#4CAF50", desc: "International English Language Testing" },
    { name: "TOEFL", color: "#FF5722", desc: "Test of English as a Foreign Language" },
    { name: "GRE", color: "#9C27B0", desc: "Graduate Record Examinations" },
    { name: "SAT", color: "#FFC107", desc: "Scholastic Assessment Test" },
    { name: "GMAT", color: "#2196F3", desc: "Graduate Management Admission Test" },
    { name: "PTE", color: "#E91E63", desc: "Pearson Test of English" },
  ]

  const heroImages = ["https://imageio.forbes.com/specials-images/imageserve/66cc763ec89993f99f155051/0x0.jpg?format=jpg&amp;height=900&amp;width=1600&amp;fit=bounds", 
    "https://i.ytimg.com/vi/jT1pfBsL0Ig/maxresdefault.jpg", 
    "https://static.tildacdn.com/tild3737-6638-4563-b033-356265616334/learn-english-at-ec-.jpg"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % Math.ceil(successStories.length / 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [successStories.length])

  // Hero Slideshow Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  /* ============================ */
  /* HELPERS */
  /* ============================ */
  const getVisibleStories = () => {
    const startIndex = currentStoryIndex * 3
    return successStories.slice(startIndex, startIndex + 3)
  }


  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ height: "100vh" }}>
        {/* Background Slideshow */}
        <div
          className="hero-slideshow"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: "100vw",
            height: "100vh",
            transform: "translateX(-50%)",
            zIndex: 0,
          }}
        >
          {heroImages.map((image, i) => (
            <div
              key={i}
              className={`hero-slide ${i === index ? "active" : ""}`}
              style={{
                backgroundImage: `url(${image})`,
                opacity: i === index ? 1 : 0,
                transition: "opacity 1.2s ease-in-out",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-overlay" style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
          background: "rgba(20, 30, 40, 0.45)",
        }}>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: "center",
              color: "#fff",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <h1
              style={{
                fontSize: "3.2rem",
                fontWeight: "800",
                marginBottom: "18px",
                letterSpacing: "1px",
                textShadow: "0 4px 24px rgba(0,0,0,0.5)",
              }}
            >
                  <br>
                  </br>
             <span style={{
                background: "linear-gradient(90deg, #ffd700, #ff9800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "900",
            
              }}>IB Private Tutors</span>
            </h1>
            <p
              style={{
                fontSize: "1.3rem",
                fontWeight: "500",
                marginBottom: "32px",
                color: "#fff",
                textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                lineHeight: "1.5",
              }}
            >
            Award-Winning Excellence in Test Preparation. 

Proud recipient of the British Council IELTS Partner Award, we are your go-to platform for IELTS, TOEFL, GRE, SAT, GMAT, PTE, 
and more. With expert tutors and proven results, we help you achieve your academic and professional dreams.
            </p>
            <div style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
              <Link to="/courses">
                <button
                  style={{
                    background: "#007bff",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                    borderRadius: "30px",
                    padding: "14px 36px",
                    border: "none",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                >
                  Explore Courses
                </button>
              </Link>
              <button
                style={{
                  background: "#ffd700",
                  color: "#222",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  borderRadius: "30px",
                  padding: "14px 36px",
                  border: "none",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                  cursor: "pointer",
                  transition: "background 0.3s",
                }}
              >
                Start Your Journey
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits section" data-aos="fade-up">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose IB Private Tutors?
          </motion.h2>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
                <div className="card-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="courses-overview section" data-aos="fade-up">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Master Every Test
          </motion.h2>

          <div className="courses-grid">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="course-badge"
                style={{ "--course-color": course.color }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="course-name">{course.name}</div>
                <div className="course-desc">{course.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section" data-aos="fade-up">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="success-stories section" data-aos="fade-up">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h2>

          <div className="carousel-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStoryIndex}
                className="stories-grid"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {getVisibleStories().map((story, index) => (
                  <motion.div
                    key={`${currentStoryIndex}-${index}`}
                    className="story-card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="story-image">
                      <img src={story.image || "/placeholder.svg"} alt={story.name} />
                    </div>
                    <div className="story-content">
                      <div className="story-header">
                        <h3>{story.name}</h3>
                        <div className="story-badge">
                          <span className="exam">{story.exam}</span>
                          <span className="score">{story.score}</span>
                        </div>
                      </div>
                      <p>"{story.story}"</p>
                      <div className="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {Array.from({ length: Math.ceil(successStories.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentStoryIndex ? "active" : ""}`}
                  onClick={() => setCurrentStoryIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
