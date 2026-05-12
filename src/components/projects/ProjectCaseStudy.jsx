import React from 'react';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaLightbulb,
  FaPuzzlePiece,
  FaCheckCircle,
  FaCogs,
  FaChartLine,
  FaBriefcase,
  FaCalendarAlt,
  FaUserTie,
} from 'react-icons/fa';
import ProjectGallery from './ProjectGallery';

/**
 * Renders the full case study content inside the Modal.
 * Pure presentational — driven entirely by the `project` prop.
 */
const ProjectCaseStudy = ({ project, titleId }) => {
  if (!project) return null;

  const {
    title,
    tagline,
    image,
    gallery,
    category,
    year,
    role,
    duration,
    technologies = [],
    overview,
    problem,
    challenges = [],
    solution,
    features = [],
    results = [],
    links = {},
  } = project;

  const galleryImages =
    gallery && gallery.length ? gallery : image ? [image] : [];

  return (
    <article className="cs-root">
      {/* HERO */}
      <header
        className="cs-hero"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="cs-hero__scrim" />
        <div className="cs-hero__content">
          <span className="cs-hero__chip">{category}</span>
          <h2 id={titleId} className="cs-hero__title">
            {title}
          </h2>
          <p className="cs-hero__tagline">{tagline}</p>

          <ul className="cs-hero__meta">
            {role && (
              <li>
                <FaUserTie aria-hidden="true" />
                <span>{role}</span>
              </li>
            )}
            {duration && (
              <li>
                <FaCalendarAlt aria-hidden="true" />
                <span>{duration}</span>
              </li>
            )}
            {year && (
              <li>
                <FaBriefcase aria-hidden="true" />
                <span>{year}</span>
              </li>
            )}
          </ul>

          <div className="cs-hero__actions">
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-btn cs-btn--primary"
              >
                <FaExternalLinkAlt aria-hidden="true" />
                <span>Live Demo</span>
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-btn cs-btn--ghost"
              >
                <FaGithub aria-hidden="true" />
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* GALLERY */}
      {galleryImages.length > 0 && (
        <section className="cs-section cs-section--gallery" aria-label="Project gallery">
          <ProjectGallery images={galleryImages} title={title} />
        </section>
      )}

      {/* OVERVIEW + RESULTS */}
      <section className="cs-section cs-grid">
        <div className="cs-grid__main">
          {overview && (
            <div className="cs-block">
              <h3 className="cs-block__title">Overview</h3>
              <p className="cs-block__text">{overview}</p>
            </div>
          )}
        </div>

        {results.length > 0 && (
          <aside className="cs-grid__side cs-results">
            <h3 className="cs-results__title">
              <FaChartLine aria-hidden="true" />
              <span>Impact</span>
            </h3>
            <ul className="cs-results__list">
              {results.map((r) => (
                <li key={r.label} className="cs-results__item">
                  <span className="cs-results__value">{r.value}</span>
                  <span className="cs-results__label">{r.label}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </section>

      {/* PROBLEM + CHALLENGES */}
      <section className="cs-section cs-two-col">
        {problem && (
          <div className="cs-block">
            <h3 className="cs-block__title">
              <FaLightbulb aria-hidden="true" />
              <span>Problem Statement</span>
            </h3>
            <p className="cs-block__text">{problem}</p>
          </div>
        )}

        {challenges.length > 0 && (
          <div className="cs-block">
            <h3 className="cs-block__title">
              <FaPuzzlePiece aria-hidden="true" />
              <span>Challenges</span>
            </h3>
            <ul className="cs-list">
              {challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* SOLUTION */}
      {solution && (
        <section className="cs-section">
          <div className="cs-block cs-block--accent">
            <h3 className="cs-block__title">
              <FaCogs aria-hidden="true" />
              <span>Solution & Architecture</span>
            </h3>
            <p className="cs-block__text">{solution}</p>
          </div>
        </section>
      )}

      {/* FEATURES */}
      {features.length > 0 && (
        <section className="cs-section">
          <div className="cs-block">
            <h3 className="cs-block__title">
              <FaCheckCircle aria-hidden="true" />
              <span>Key Features</span>
            </h3>
            <ul className="cs-features">
              {features.map((f, i) => (
                <li key={i} className="cs-features__item">
                  <FaCheckCircle aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* TECH STACK */}
      {technologies.length > 0 && (
        <section className="cs-section">
          <div className="cs-block">
            <h3 className="cs-block__title">Tech Stack</h3>
            <div className="cs-stack">
              {technologies.map((t) => (
                <span key={t} className="cs-stack__chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER CTA */}
      {(links.demo || links.github) && (
        <footer className="cs-footer">
          <div className="cs-footer__inner">
            <p className="cs-footer__text">Want to see it in action?</p>
            <div className="cs-footer__actions">
              {links.demo && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-btn cs-btn--primary"
                >
                  <FaExternalLinkAlt aria-hidden="true" />
                  <span>Open Live Demo</span>
                </a>
              )}
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-btn cs-btn--ghost"
                >
                  <FaGithub aria-hidden="true" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </footer>
      )}
    </article>
  );
};

export default ProjectCaseStudy;
