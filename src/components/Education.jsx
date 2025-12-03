import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaStar, FaBook, FaAward } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';
import '../styles/Education.css';

const Education = () => {
  return (
    <section className="education-section section-padding-sm" id="education">
      <div className="container">
        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <h2>Education</h2>
          <div className="title-line"></div>
          <p>My academic background and qualifications</p>
        </div>

        {/* Education Content */}
        <div className="row align-items-center g-5">
          {/* Left: Image/Illustration */}
          <div className="col-lg-5" data-aos="fade-right" data-aos-duration="1000">
            <div className="education-visual">
              <div className="visual-card">
                <div className="visual-icon">
                  <HiAcademicCap />
                </div>
                <div className="visual-stats">
                  <div className="stat-item">
                    <h3>4</h3>
                    <p>Years</p>
                  </div>
                  <div className="stat-item">
                    <h3>3.35</h3>
                    <p>GPA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Education Details */}
          <div className="col-lg-7" data-aos="fade-left" data-aos-duration="1000">
            <div className="education-card card-hover-lift">
              {/* Header */}
              <div className="education-header">
                <div className="degree-icon">
                  <FaGraduationCap />
                </div>
                <div className="degree-info">
                  <span className="degree-badge">Bachelor's Degree</span>
                  <h3 className="degree-title">Software Engineering</h3>
                  <div className="university-info">
                    <p className="university-name">
                      <HiAcademicCap className="me-2" />
                      Sir Syed University of Engineering and Technology
                    </p>
                    <p className="duration">
                      <FaCalendarAlt className="me-2" />
                      2020 - 2024
                    </p>
                  </div>
                </div>
              </div>

              {/* GPA Section */}
              <div className="gpa-section">
                <div className="gpa-card">
                  <FaStar className="gpa-icon" />
                  <div className="gpa-content">
                    <span className="gpa-label">Cumulative GPA</span>
                    <span className="gpa-value">3.35/4.0</span>
                  </div>
                </div>
              </div>

              {/* Key Courses */}
              <div className="courses-section">
                <h4 className="courses-title">
                  <FaBook className="me-2" />
                  Key Courses
                </h4>
                <div className="courses-grid">
                  <div className="course-item">
                    <div className="course-bullet"></div>
                    <span>Software Engineering</span>
                  </div>
                  <div className="course-item">
                    <div className="course-bullet"></div>
                    <span>Data Structures & Algorithms</span>
                  </div>
                  <div className="course-item">
                    <div className="course-bullet"></div>
                    <span>System Design & Architecture</span>
                  </div>
                  <div className="course-item">
                    <div className="course-bullet"></div>
                    <span>Database Management Systems</span>
                  </div>
                  <div className="course-item">
                    <div className="course-bullet"></div>
                    <span>Web Technologies</span>
                  </div>
                  <div className="course-item">
                    <div className="course-bullet"></div>
                    <span>Software Project Management</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="achievements-badge">
                <FaAward />
                <span>Graduated with Good Academic Standing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
