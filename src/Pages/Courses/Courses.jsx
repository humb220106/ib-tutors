import coursesData from "./Courses.json"
import "./courses.css"

const Courses = () => {
  return (
    <div className="courses-page">
      <div className="container">
        <div className="courses-header">
           <br/>
          <br/>
          <br/>
          <h1>Our Courses</h1>
          <p>
            Choose from our comprehensive range of test preparation programs designed to help you achieve your target
            scores.
          </p>
        </div>

        <div className="courses-grid">
          {coursesData.map((course) => (
            <div key={course.id} className="course-card">
              <div className={`course-icon ${course.title.toLowerCase()}`}>{course.title}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-details">
                <div className="detail">
                  <strong>Duration:</strong> {course.duration}
                </div>
                <div className="detail">
                  <strong>Mode:</strong> {course.mode}
                </div>
                <div className="detail">
                  <strong>Level:</strong> {course.level}
                </div>
              </div>
              <div className="course-features">
                <h4>What's Included:</h4>
                <ul>
                  {course.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button className="btn register-btn">Register Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses
