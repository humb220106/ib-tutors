import "./About.css"

const About = () => {
  const tutors = [
    {
      name: "Mrs Peace Emmanuel-Ojo",
      specialties: ["IELTS", "TOEFL", "Academic Writing"],
      experience: "12 years",
      image: "/teach1.jpg",
    },
    {
      name: "Prof. Michael Johnson",
      qualification: "MA in Applied Linguistics",
      specialties: ["GRE", "GMAT"],
      experience: "12 years",
      image: "/professional-male-tutor.png",
    },
    {
      name: "Ms. Priya Sharma",
      qualification: "MEd in TESOL",
      specialties: ["SAT", "PTE", "Speaking Skills"],
      experience: "8 years",
      image: "/professional-female-teacher.png",
    },
  ]

  const achievements = [
    "Over 95% success rate in achieving target scores",
    "Winner of the British Council IELTS Partner Award 2024",
  ]

  return (
    <div className="about-page">
      <div className="container">
        {/* Who We Are Section */}
        <section className="about-intro section">
          <div className="about-content">
            <br />
            <h1 className="about-title">About IB Private Tutors</h1>
            <p className="about-lead">
              At IB Private Tutors, we believe that every student has the potential to achieve excellence. With over 12
              years of experience in test preparation, we have helped thousands of students reach their academic goals
              and secure admissions to their dream universities worldwide.
            </p>
            <p className="about-description">
              Our team of qualified educators specializes in IELTS, TOEFL, GRE, SAT, GMAT, PTE, and other English
              proficiency tests. We combine proven teaching methodologies with personalized attention to ensure each
              student receives the support they need to succeed.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mission section"> 
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <div className="mission-grid">
              <div className="mission-item">
                <div className="mission-icon">🎯</div>
                <h3 className="mission-title">Excellence in Education</h3>
                <p className="mission-text">
                  We strive to provide the highest quality test preparation services, ensuring our students achieve
                  their target scores and beyond.
                </p>
              </div>
              <div className="mission-item">
                <div className="mission-icon">👥</div>
                <h3 className="mission-title">Personalized Learning</h3>
                <p className="mission-text">
                  Every student is unique. We create customized study plans that cater to individual learning styles and
                  goals.
                </p>
              </div>
              <div className="mission-item">
                <div className="mission-icon">🌟</div>
                <h3 className="mission-title">Proven Results</h3>
                <p className="mission-text">
                  Our track record speaks for itself - consistent high scores and successful university admissions
                  worldwide.
                </p>
              </div>
              <div className="mission-item">
                <div className="mission-icon">🚀</div>
                <h3 className="mission-title">Future Success</h3>
                <p className="mission-text">
                  We don't just prepare students for tests; we prepare them for success in their academic and
                  professional careers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Tutors Section */}
        <section className="tutors section">
          <h2 className="section-title text-center">Meet Our Expert Tutors</h2>
          <div className="tutors-grid">
            {tutors.map((tutor, index) => (
              <div key={index} className="tutor-card">
                <div className="tutor-image">
                  <img src={tutor.image || "/placeholder.svg"} alt={tutor.name} />
                </div>
                <div className="tutor-info">
                  <h3 className="tutor-name">{tutor.name}</h3>
                  <p className="tutor-qualification">{tutor.qualification}</p>
                  <p className="tutor-experience">{tutor.experience} of experience</p>
                  <div className="specialties">
                    <h4 className="specialties-title">Specialties:</h4>
                    <div className="specialty-tags">
                      {tutor.specialties.map((specialty, idx) => (
                        <span key={idx} className="specialty-tag">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching Approach Section */}
        <section className="approach section">
          <div className="approach-content">
            <h2 className="section-title">Our Teaching Approach</h2>
            <div className="approach-grid">
              <div className="approach-step">
                <div className="step-number">1</div>
                <h3 className="step-title">Assessment</h3>
                <p className="step-text">
                  We begin with a comprehensive assessment to understand your current level and identify areas for
                  improvement.
                </p>
              </div>
              <div className="approach-step">
                <div className="step-number">2</div>
                <h3 className="step-title">Personalized Plan</h3>
                <p className="step-text">
                  Based on your assessment, we create a customized study plan tailored to your specific needs and
                  timeline.
                </p>
              </div>
              <div className="approach-step">
                <div className="step-number">3</div>
                <h3 className="step-title">Interactive Learning</h3>
                <p className="step-text">
                  Our engaging lessons combine theory with practice, ensuring you understand concepts and can apply them
                  effectively.
                </p>
              </div>
              <div className="approach-step">
                <div className="step-number">4</div>
                <h3 className="step-title">Regular Feedback</h3>
                <p className="step-text">
                  We provide continuous feedback and progress tracking to keep you motivated and on track to achieve
                  your goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="achievements section">
          <div className="achievements-content">
            <h2 className="section-title">Our Achievements</h2>
            <div className="achievements-list">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-icon">🏆</div>
                  <p className="achievement-text">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
