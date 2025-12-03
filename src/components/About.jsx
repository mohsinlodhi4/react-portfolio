import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import '../styles/About.css';

const experiences = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Idenfo',
    location: 'Pakistan',
    period: 'May 2023 - Current',
    logo: '/images/idenfo.png',
    current: true,
    achievements: [
      'Engineered robust API in Node.js enabling seamless data retrieval from MongoDB database leading to 25% reduction in loading time and improved user experience',
      'Carried out tasks including architecture setup of frontend and backend services ensuring consistency of patterns throughout the services',
      'Utilized server resources effectively while keeping check on cost of the system'
    ]
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Linkstar',
    location: 'Pakistan',
    period: 'March 2022 - April 2023',
    logo: '/images/linkstar.png',
    current: false,
    achievements: [
      'Proficiently managed microservices architecture for websites built on multiple tech stacks like Node.js, PHP, React and Next.js',
      'Led end-to-end development of payment modules, analytics and themes, from ideation to deployment',
      'Developed ERP and CRM applications for clients',
      'Implemented performance boosting techniques like caching using Redis and database indexing'
    ]
  },
  {
    id: 3,
    title: 'Junior Software Engineer',
    company: 'Increase Rev',
    location: 'Pakistan',
    period: 'October 2021 - February 2022',
    logo: '/images/increaserev.png',
    current: false,
    achievements: [
      'Developed image optimization library and plugin which led to boosting 50% of website\'s load speed on websites with high graphics content',
      'Conducted research on SQL databases to optimize data fetching time through effective techniques like indexing and improving database architecture'
    ]
  },
  {
    id: 4,
    title: 'Software Engineer Intern',
    company: 'Deevloopers',
    location: 'Pakistan',
    period: 'August 2021 - October 2022',
    logo: '/images/deevloopers.png',
    current: false,
    achievements: [
      'Incorporated data visualization graphs, using Chart JS, allowing the admin to track user and connection data.',
      'Employed short polling and long polling for real time data fetching'
    ]
  }
];

const About = () => {
  return (
    <section className="experience-section section-padding" id="aboutus">
      <div className="container">
        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <h2>Work Experience</h2>
          <div className="title-line"></div>
          <p>My professional journey building innovative solutions</p>
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper">
          {experiences.map((exp, index) => (
            <div 
              className="timeline-item"
              key={exp.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Timeline Line & Dot */}
              <div className="timeline-marker">
                <div className={`timeline-dot ${exp.current ? 'current' : ''}`}>
                  <FaBriefcase />
                </div>
                {index !== experiences.length - 1 && <div className="timeline-line"></div>}
              </div>

              {/* Content Card */}
              <div className="timeline-content">
                <div className="experience-card card-hover-lift">
                  {/* Header */}
                  <div className="experience-header">
                    <div className="company-logo">
                      <img src={exp.logo} alt={`${exp.company} logo`} />
                    </div>
                    
                    <div className="experience-meta flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                        <div>
                          <h3 className="experience-title mb-2">{exp.title}</h3>
                          <div className="company-info">
                            <span className="company-name">
                              <FaMapMarkerAlt className="me-2" />
                              {exp.company}, {exp.location}
                            </span>
                          </div>
                        </div>
                        {exp.current && (
                          <span className="badge-current">
                            <HiLightningBolt className="me-1" />
                            Current
                          </span>
                        )}
                      </div>
                      
                      <div className="experience-period">
                        <FaCalendarAlt className="me-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="experience-body">
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="achievement-item">
                          <FaChevronRight className="achievement-icon" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="experience-stats row g-4 mt-5" data-aos="fade-up">
          <div className="col-md-4">
            <div className="stat-card text-center">
              <div className="stat-icon">
                <FaBriefcase />
              </div>
              <h4 className="stat-number">4+</h4>
              <p className="stat-label">Years Experience</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-card text-center">
              <div className="stat-icon">
                <HiLightningBolt />
              </div>
              <h4 className="stat-number">20+</h4>
              <p className="stat-label">Projects Delivered</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-card text-center">
              <div className="stat-icon">
                <FaBriefcase />
              </div>
              <h4 className="stat-number">4</h4>
              <p className="stat-label">Companies Worked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
