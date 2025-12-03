import React from 'react';
import { FaServer, FaCode, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';
import '../styles/Skills.css';

const skillsData = [
  {
    category: 'Backend',
    icon: <FaServer />,
    color: '#662d91',
    skills: [
      { name: 'Node.js', icon: require('../front/images/nodejs.png'), level: 'Expert' },
      { name: 'Nest.js', icon: require('../front/images/icons8-nestjs-48.png'), level: 'Advanced' },
      { name: 'Python', icon: require('../front/images/icons8-python-48.png'), level: 'Advanced' },
      { name: 'PHP', icon: require('../front/images/fifth-icon11.png'), level: 'Intermediate' },
      { name: 'Laravel', icon: require('../front/images/fifth-icon15.png'), level: 'Intermediate' }
    ]
  },
  {
    category: 'Frontend',
    icon: <FaCode />,
    color: '#8b4ec3',
    skills: [
      { name: 'React.js', icon: require('../front/images/fifth-icon7.png'), level: 'Expert' },
      { name: 'Next.js', icon: require('../front/images/nextjs.png'), level: 'Advanced' },
      { name: 'Vue.js', icon: require('../front/images/vue.png'), level: 'Advanced' },
      { name: 'TypeScript', icon: require('../front/images/fifth-icon9.png'), level: 'Advanced' }
    ]
  },
  {
    category: 'Database',
    icon: <FaDatabase />,
    color: '#4a1f6a',
    skills: [
      { name: 'MongoDB', icon: require('../front/images/icons8-mongodb-48.png'), level: 'Expert' },
      { name: 'PostgreSQL', icon: require('../front/images/icons8-postgres-48.png'), level: 'Advanced' },
      { name: 'MySQL', icon: require('../front/images/icons8-mysql-48.png'), level: 'Advanced' },
      { name: 'Redis', icon: require('../front/images/icons8-redis-48.png'), level: 'Advanced' }
    ]
  },
  {
    category: 'DevOps & Cloud',
    icon: <FaCloud />,
    color: '#9b59d0',
    skills: [
      { name: 'AWS', icon: require('../front/images/icons8-aws-48.png'), level: 'Advanced' },
      { name: 'GCP', icon: require('../front/images/icons8-google-cloud-48.png'), level: 'Advanced' },
      { name: 'Docker', icon: require('../front/images/icons8-docker-48.png'), level: 'Advanced' },
      { name: 'Kafka', icon: require('../front/images/icons8-apache-kafka-64.png'), level: 'Advanced' }
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills-section section-padding" id="skills1">
      <div className="container">
        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <h2>Technical Skills</h2>
          <div className="title-line"></div>
          <p>Technologies and tools I use to bring ideas to life</p>
        </div>

        {/* Skills Categories */}
        <div className="skills-categories">
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="skill-category"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              {/* Category Header */}
              <div className="category-header" style={{ '--category-color': category.color }}>
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.category}</h3>
              </div>

              {/* Skills Grid */}
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="skill-card"
                    data-aos="zoom-in"
                    data-aos-delay={(categoryIndex * 100) + (skillIndex * 50)}
                  >
                    <div className="skill-card-inner">
                      <div className="skill-icon-wrapper">
                        <img 
                          src={skill.icon} 
                          alt={`${skill.name} icon`}
                          className="skill-icon"
                        />
                      </div>
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="skills-summary" data-aos="fade-up" data-aos-delay="400">
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="summary-card">
                <div className="summary-icon">
                  <FaServer />
                </div>
                <h4>5+</h4>
                <p>Backend Technologies</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="summary-card">
                <div className="summary-icon">
                  <FaCode />
                </div>
                <h4>4+</h4>
                <p>Frontend Frameworks</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="summary-card">
                <div className="summary-icon">
                  <FaDatabase />
                </div>
                <h4>4+</h4>
                <p>Database Systems</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="summary-card">
                <div className="summary-icon">
                  <FaTools />
                </div>
                <h4>15+</h4>
                <p>Tools & Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
