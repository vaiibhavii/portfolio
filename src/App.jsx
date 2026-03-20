import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Download, ArrowRight, ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { 
  personalInfo, 
  aboutMe, 
  skills, 
  projects, 
  experience, 
  education, 
  interests 
} from './data/portfolio-data';
import './App.css';

export default function App() {
  const [activeProject, setActiveProject] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    // This will download the resume.pdf from the public folder
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Vaibhavi_Kulkarni_Resume.pdf';
    link.click();
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo">VK</div>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#interests">Interests</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="dot"></span>
            Available for opportunities
          </div>
          
          <h1 className="hero-title">
            <span className="hero-title-main">{personalInfo.name.split(' ')[0]}</span>
            <span className="hero-title-accent">{personalInfo.name.split(' ')[1]}</span>
          </h1>

          <div className="hero-subtitle">
            <div className="subtitle-line">
              <span className="highlight">Data Engineer</span> &
            </div>
            <div className="subtitle-line">
              Full-Stack Developer
            </div>
          </div>

          <p className="hero-description">
            MCA student in Pune crafting scalable data pipelines and building web experiences
            that transform complexity into clarity. Currently exploring the intersection of
            data engineering and modern web development.
          </p>

          <div className="hero-meta">
            <div className="meta-item">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="meta-item">
              <Calendar size={16} />
              <span>{personalInfo.graduation}</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Let's Talk
              <ArrowRight size={18} />
            </a>
            <a href="#work" className="btn-secondary">
              View Work
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="large-text">{aboutMe.intro}</p>
            
            {aboutMe.paragraphs.map((para, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </div>

          <div className="about-skills">
            <div className="skill-group">
              <h3>Core Skills</h3>
              <div className="skill-items">
                {skills.core.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-group">
              <h3>Data Engineering</h3>
              <div className="skill-items">
                {skills.dataEngineering.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-group">
              <h3>DevOps & Tools</h3>
              <div className="skill-items">
                {skills.devops.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          {aboutMe.stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="work">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">Selected Work</h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-item ${activeProject === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className="project-header">
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-category">{project.category}</span>
                  <span className={`project-status ${project.status === 'Live' ? 'live' : 'dev'}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="project-name">{project.name}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-details">
                <div className="project-tech">
                  <strong>Stack:</strong>
                  <div className="tech-pills">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-impact">
                  <strong>Key Features:</strong>
                  <ul>
                    {project.impact.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
                <ArrowUpRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-list">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="exp-header">
                <div>
                  <h3>{exp.role}</h3>
                  <div className="exp-company">
                    {exp.company} · {exp.type}
                  </div>
                </div>
                <div className="exp-period">{exp.period}</div>
              </div>
              <ul className="exp-highlights">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="education-section">
          <h3 className="edu-title">Education</h3>
          <div className="edu-grid">
            {education.map((edu, index) => (
              <div key={index} className="edu-card">
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-school">{edu.school}</div>
                <div className="edu-year">{edu.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section id="interests" className="interests">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">Beyond Code</h2>
        </div>

        <p className="interests-intro">
          When I'm not building data pipelines or debugging code, you'll find me exploring
          the world through different lenses—from nurturing plants to capturing moments.
        </p>

        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className={`interest-card ${interest.isLarge ? 'large' : ''}`}>
              <div className="interest-icon">{interest.icon}</div>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </div>
          ))}
        </div>

        <div className="interests-quote">
          <p>"The best code is written by people who live full, curious lives."</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="section-header">
          <span className="section-number">05</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-content">
          <p className="contact-intro">
            I'm currently looking for new opportunities in data engineering and full-stack development.
            Whether you have a project in mind, want to collaborate, or just want to connect—I'd love to hear from you.
          </p>

          <div className="contact-grid">
            <a href={`mailto:${personalInfo.email}`} className="contact-card">
              <Mail size={24} />
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">{personalInfo.email}</div>
              </div>
            </a>

            <a href={`tel:${personalInfo.phone}`} className="contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">{personalInfo.phone}</div>
              </div>
            </a>

            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
              <Linkedin size={24} />
              <div>
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">vaibhavi-kulkarni-vaik</div>
              </div>
            </a>

            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-card">
              <Github size={24} />
              <div>
                <div className="contact-label">GitHub</div>
                <div className="contact-value">View Profile</div>
              </div>
            </a>
          </div>

          <button onClick={handleResumeDownload} className="download-resume">
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <p>Designed & built by {personalInfo.name}</p>
            <p className="footer-year">© {new Date().getFullYear()}</p>
          </div>
          <div className="footer-links">
            <a href={`mailto:${personalInfo.email}`}>Email</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
