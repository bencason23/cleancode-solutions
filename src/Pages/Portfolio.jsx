import React, { useState, useEffect, useRef } from 'react';
import './PortfolioModern.css';

// Modern portfolio with dark/light mode, animations, and enhanced features
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [isVisible, setIsVisible] = useState({});
  const sectionsRef = useRef([]);

  // Typing effect for hero section
  const titles = ['Full Stack Developer', 'Cyber Security Enthusiast', 'Problem Solver', 'Tech Innovator'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Typing animation
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentTitle.length) {
            setTypedText(currentTitle.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setTypedText(currentTitle.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  // Navigation links
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  // Scroll to section
  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Skills data
  const skills = [
    { img: 'php logo.jpeg', name: 'PHP', desc: 'Server-side scripting for dynamic web apps.', level: 85 },
    { img: 'logo192.png', name: 'React.js', desc: 'Interactive & reusable UI components.', level: 90 },
    { img: 'cyber.jpeg', name: 'Cyber Security', desc: 'Securing systems & protecting data.', level: 80 },
    { img: 'HTML.png', name: 'HTML', desc: 'Foundational markup for web content.', level: 95 },
    { img: 'CSS.png', name: 'CSS', desc: 'Styling & layout for web pages.', level: 90 },
    { img: 'tailwind.png', name: 'Tailwind CSS', desc: 'Utility-first responsive designs.', level: 88 },
    { img: 'javascript.jpeg', name: 'JavaScript', desc: 'Dynamic, interactive web applications.', level: 92 },
    { img: 'python.jpeg', name: 'Python & ML', desc: 'Building AI & machine learning models.', level: 78 },
    { img: 'NODE 2.png', name: 'Node.js', desc: 'Scalable server-side applications.', level: 85 },
    { img: 'mysql.png', name: 'MySQL', desc: 'Relational database management.', level: 82 },
    { img: 'firebase.png', name: 'Firebase', desc: 'NoSQL cloud database & auth.', level: 80 },
    { img: 'mongo.jpeg', name: 'MongoDB', desc: 'NoSQL document database.', level: 83 },
    { img: 'git.png', name: 'Git', desc: 'Version control & collaboration.', level: 90 },
    { img: 'team player 2.jpeg', name: 'Team Player', desc: 'Collaborative & supportive.', level: 95 },
    { img: 'problem solver.jpeg', name: 'Problem Solver', desc: 'Analytical & solution-driven.', level: 92 },
    { img: 'icon.png', name: 'Communication', desc: 'Clear & effective communicator.', level: 90 },
  ];

  // Projects data
  const projects = [
    {
      img: 'unify.png',
      title: 'Unify Chat',
      desc: 'Real-time email-based chat application for seamless conversations.',
      link: 'https://unify-f1ee6.web.app/',
      tags: ['React', 'Firebase', 'Real-time'],
    },
    {
      img: 'library.jpeg',
      title: 'Library Management',
      desc: 'Streamlines organization and tracking of library resources.',
      link: 'https://cleancode-solutions.onrender.com',
      tags: ['Node.js', 'MySQL', 'Full Stack'],
    },
    {
      img: 'portfolio.png',
      title: 'Portfolio Website',
      desc: 'Showcasing skills and projects with modern design.',
      link: 'https://cleancode-solutions-3tvxybcv4-bencason23s-projects.vercel.app',
      tags: ['React', 'CSS', 'Vercel'],
    },
    {
      img: 'phone shop.jpeg',
      title: 'Phone Repair Shop',
      desc: 'Electronic management system for device repair inventory.',
      link: 'https://dseproject-client-1.onrender.com/',
      tags: ['MERN', 'Inventory', 'Dashboard'],
    },
    {
      img: 'logo.png',
      title: 'AI Chatbot',
      desc: 'AI-powered chatbot for instant answers via NLP.',
      link: 'https://cdn.botpress.cloud/webchat/v3.1/shareable.html?configUrl=https://files.bpcontent.cloud/2025/07/21/09/20250721092125-TAYEMQZD.json',
      tags: ['AI', 'NLP', 'Botpress'],
    },
  ];

  // Toggle dark mode
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`portfolio ${darkMode ? 'dark' : 'light'}`}>
      {/* Animated background particles */}
      <div className="bg-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i % 5}`} />
        ))}
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-bracket">&lt;</span>
          BCK
          <span className="logo-bracket">/&gt;</span>
        </div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero / Profile Section */}
      <section id="home" className="hero-section" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className={`hero-content ${isVisible['home'] ? 'visible' : ''}`}>
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Benson .C. Kamau</h1>
            <div className="hero-typed">
              <span className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-tagline">
              Lifelong learner & technology enthusiast building solutions that make a difference.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
            <div className="hero-socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="mailto:benson@example.com" className="social-link" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-glow" />
            <img src="1772458447565.jpg" alt="Benson C. Kamau" className="hero-image" />
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <span>Scroll Down</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section" ref={(el) => (sectionsRef.current[1] = el)}>
        <div className={`section-content ${isVisible['about'] ? 'visible' : ''}`}>
          <h2 className="section-title">
            <span className="title-number">01.</span> About Me
          </h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Hi, I am a <strong>lifelong learner</strong> and technology enthusiast who thrives in dynamic and
                collaborative environments. From a young age, I've been drawn to the process of building,
                troubleshooting, and optimizing applications.
              </p>
              <p>
                My journey in tech has taught me the importance of <strong>creativity, resilience, and continuous
                improvement</strong>. Whether working on front-end interfaces that delight users or back-end systems
                that enhance performance, I am dedicated to creating solutions that make a difference.
              </p>
              <p>
                Outside of coding, I enjoy exploring emerging tech trends and I'm always eager to expand my knowledge
                in <strong>software development and cybersecurity</strong>.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">16+</span>
                  <span className="stat-label">Skills</span>
                </div>
                <div className="stat">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Curiosity</span>
                </div>
              </div>
            </div>
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                <img src="1772458447565.jpg" alt="About Benson" className="about-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section" ref={(el) => (sectionsRef.current[2] = el)}>
        <div className={`section-content ${isVisible['skills'] ? 'visible' : ''}`}>
          <h2 className="section-title">
            <span className="title-number">02.</span> My Skills
          </h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                className="skill-card"
                key={index}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="skill-icon-wrapper">
                  <img src={skill.img} alt={skill.name} className="skill-icon" />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.desc}</p>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section" ref={(el) => (sectionsRef.current[3] = el)}>
        <div className={`section-content ${isVisible['projects'] ? 'visible' : ''}`}>
          <h2 className="section-title">
            <span className="title-number">03.</span> Some of My Projects
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image-wrapper">
                  <img src={project.img} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      Visit Site →
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span className="project-tag" key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section" ref={(el) => (sectionsRef.current[4] = el)}>
        <div className={`section-content ${isVisible['contact'] ? 'visible' : ''}`}>
          <h2 className="section-title">
            <span className="title-number">04.</span> Contact Me
          </h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's build something amazing together</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>benson@example.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            <form
              className="contact-form"
              action="https://formspree.io/f/mgvkqopy"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Send Message ✉️
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Benson .C. Kamau. All rights reserved.</p>
          <p className="footer-tagline">Built with React & ❤️</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default Portfolio;
