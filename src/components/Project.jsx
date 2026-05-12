import React, { useCallback, useState } from 'react';
import projectsData from '../data/projectsData';
import ProjectCard from './projects/ProjectCard';
import Modal from './projects/Modal';
import ProjectCaseStudy from './projects/ProjectCaseStudy';
import '../styles/Project.css';
import '../styles/ProjectModal.css';

const TITLE_ID = 'case-study-title';

const Project = () => {
  const [activeProject, setActiveProject] = useState(null);

  const openProject = useCallback((project) => {
    setActiveProject(project);
  }, []);

  const closeProject = useCallback(() => {
    setActiveProject(null);
  }, []);

  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Featured Projects</h2>
          <div className="title-line"></div>
          <p>
            Interactive case studies showcasing how I design, ship, and scale
            real-world software products.
          </p>
        </div>

        <div className="pc-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={openProject}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={Boolean(activeProject)}
        onClose={closeProject}
        labelledBy={TITLE_ID}
      >
        <ProjectCaseStudy project={activeProject} titleId={TITLE_ID} />
      </Modal>
    </section>
  );
};

export default Project;
