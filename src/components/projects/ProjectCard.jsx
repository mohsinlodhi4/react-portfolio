import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ProjectCard = ({ project, index = 0, onOpen }) => {
  const {
    title,
    tagline,
    image,
    category,
    featured,
    technologies = [],
  } = project;

  const visibleTech = technologies.slice(0, 5);
  const remainingTech = Math.max(technologies.length - visibleTech.length, 0);

  return (
    <motion.article
      className="pc-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <button
        type="button"
        className="pc-card__media"
        onClick={() => onOpen(project)}
        aria-label={`Open case study for ${title}`}
      >
        <img
          src={image}
          alt={`${title} — ${category} case study cover`}
          loading="lazy"
          className="pc-card__img"
        />
        {featured && (
          <span className="pc-card__featured">
            <HiSparkles aria-hidden="true" />
            Featured
          </span>
        )}
        <span className="pc-card__media-overlay" aria-hidden="true">
          <span className="pc-card__media-overlay-text">View Case Study</span>
        </span>
      </button>

      <div className="pc-card__body">
        <div className="pc-card__meta">
          <span className="pc-card__category">{category}</span>
        </div>

        <h3 className="pc-card__title">{title}</h3>
        <p className="pc-card__tagline">{tagline}</p>

        <div className="pc-card__stack">
          <div className="pc-card__stack-label">
            <FaCode aria-hidden="true" />
            <span>Tech stack</span>
          </div>
          <div className="pc-card__stack-tags">
            {visibleTech.map((tech) => (
              <span key={tech} className="pc-card__chip">
                {tech}
              </span>
            ))}
            {remainingTech > 0 && (
              <span className="pc-card__chip pc-card__chip--ghost">
                +{remainingTech}
              </span>
            )}
          </div>
        </div>

        <div className="pc-card__actions">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="pc-card__cta"
          >
            <span>View Details</span>
            <FaArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
