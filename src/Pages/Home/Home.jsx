import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaDollarSign, FaChalkboardTeacher, FaChartLine } from "react-icons/fa"; 
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)

  /* ============================
     DATA
  ============================ */
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
      image: "",
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
      name: "David Wilson",
      exam: "SAT",
      score: "1480/1600",
      story:
        "The tutors understood my weaknesses and created a personalized study plan that boosted my SAT score significantly.",
      image: "/placeholder-j6mvk.png",
    },
    {
      name: "Emma Rodriguez",
      exam: "GMAT",
      score: "720/800",
      story:
        "The analytical approach and mock tests prepared me perfectly for the GMAT. Now I'm pursuing my MBA at a top business school.",
      image: "/professional-woman-confident.png",
    },
    {
      name: "James Thompson",
      exam: "PTE",
      score: "85/90",
      story:
        "The speaking practice sessions were incredible. I gained confidence and achieved my target PTE score for immigration.",
      image: "/placeholder-3ykmt.png",
    },
  ]

  const stats = [
    { number: "12+", label: "Years of Experience", },
    { number: "500+", label: "Successful Students", },
    { number: "1,500+", label: "Hours of Training",  },
    { number: "95%", label: "Success Rate",},
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
  ];

  const courses = [
    { name: "IELTS", color: "#4CAF50", desc: "International English Language Testing" },
    { name: "TOEFL", color: "#FF5722", desc: "Test of English as a Foreign Language" },
    { name: "GRE", color: "#9C27B0", desc: "Graduate Record Examinations" },
    { name: "SAT", color: "#FFC107", desc: "Scholastic Assessment Test" },
    { name: "GMAT", color: "#2196F3", desc: "Graduate Management Admission Test" },
    { name: "PTE", color: "#E91E63", desc: "Pearson Test of English" },
  ]

  /* ============================
     EFFECTS
  ============================ */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % Math.ceil(successStories.length / 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [successStories.length])

  /* ============================
     HELPERS
  ============================ */
  const getVisibleStories = () => {
    const startIndex = currentStoryIndex * 3
    return successStories.slice(startIndex, startIndex + 3)
  }

  /* ============================
     RENDER
  ============================ */
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <br />
          <br />
        </div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Transform Your Future with
              <span className="gradient-text"> Expert Test Prep</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Master IELTS, TOEFL, GRE, SAT, GMAT, PTE and unlock doors to world-class universities with our
              revolutionary learning approach.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="btn btn-primary pulse">
                <span>Start Your Journey</span>
                <div className="btn-glow"></div>
              </button>
              <button className="btn btn-secondary">
                <Link
                  to="/courses"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "block",
                    width: "100%",
                    height: "100%",
                    padding: "8px 16px",
                    borderRadius: "5px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span>Explore Courses</span>
                </Link>
              </button>
            </motion.div>
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
