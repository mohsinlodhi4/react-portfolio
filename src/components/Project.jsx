import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import '../styles/Project.css';

const projects = [
  {
    id: 1,
    title: 'Bluu Health',
    description: 'HIPAA Compliant EHR Software - A secure platform for managing appointments, billing, and claims. AI powered tools help practitioners quickly generate summaries of patient history and past visits.',
    image: '/images/bluuhealth.png',
    category: 'Healthcare',
    featured: true,
    technologies: ['React.js', 'Node.js', 'MongoDB', 'GCP', 'Tailwind', 'AI/ML'],
    links: {
      demo: 'https://bluuhealth.com/',
      github: null
    }
  },
  {
    id: 2,
    title: 'POS - MJ Fabrics',
    description: 'A Point of sale software for textile company to automate their processes like stock management, invoicing, ledgers and much more.',
    image: '/images/pos.png',
    category: 'Business',
    featured: false,
    technologies: ['Vue.js', 'Nuxt.js', 'Laravel', 'MySQL', 'Redis', 'Bootstrap'],
    links: {
      demo: 'https://software.mjfabricsstore.com/',
      github: null
    }
  },
  {
    id: 3,
    title: 'Idenfo Direct',
    description: 'Enable seamless onboarding, fight financial crime through Anti-Money Laundering and Know Your Customer services.',
    image: '/images/idenfodirect.png',
    category: 'FinTech',
    featured: true,
    technologies: ['Python', 'Nest.js', 'Vue.js', 'MongoDB', 'AWS', 'Kafka', 'Redis'],
    links: {
      demo: 'https://www.idenfodirect.com/',
      github: null
    }
  },
  {
    id: 4,
    title: 'Oliv',
    description: 'A platform for businesses and job seekers to connect and explore opportunity. Allows talent to find internships and graduate jobs while enabling them to enhance their resume with AI features.',
    image: '/images/oliv.png',
    category: 'HR Tech',
    featured: false,
    technologies: ['Next.js', 'Node.js', 'Python', 'MongoDB', 'AWS', 'Elasticsearch'],
    links: {
      demo: 'https://oliv.com/',
      github: null
    }
  }
];

const Project = () => {
  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <h2>Featured Projects</h2>
          <div className="title-line"></div>
          <p>Showcasing my best work in web development and software engineering</p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className="project-card-wrapper"
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-card card-hover-lift">
                {/* Project Image */}
                <div className="project-image-wrapper img-hover-overlay">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.category} project`}
                    className="project-image"
                  />
                  {project.featured && (
                    <div className="featured-badge">
                      <HiSparkles className="me-1" />
                      Featured
                    </div>
                  )}
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <FaRocket className="overlay-icon" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  {/* Category Badge */}
                  <div className="project-meta mb-3">
                    <span className="category-badge">{project.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="project-title mb-3">{project.title}</h3>

                  {/* Description */}
                  <p className="project-description mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="project-technologies mb-4">
                    <div className="tech-icon mb-2">
                      <FaCode />
                    </div>
                    <div className="tech-tags">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="project-links">
                    {project.links.demo && (
                      <Link 
                        to={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary-custom btn-sm"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </Link>
                    )}
                    {project.links.github && (
                      <Link 
                        to={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-custom btn-sm"
                      >
                        <FaGithub />
                        <span>View Code</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
