import React from 'react';
import '../Components/Portfolio.css'; // Make sure the path is correct

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Get My Resume Button */}
      <a href="new cv.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
        Get My Resume
      </a>

      {/* Profile Section */}
      <div className="profile-box">
        <img src="profile.jpg" alt="Profile" className="profile-picture" />
        <h1 className="job-title">Benson .C. Kamau</h1>
      </div>

      {/* About Me Section */}
      <div className="about-me-container">
        <h2><b>ABOUT ME</b></h2>
        <p className="about-me-description">
          Hi, I am a lifelong learner and technology enthusiast who thrives in dynamic and collaborative environments.
          From a young age, I’ve been drawn to the process of building, troubleshooting, and optimizing applications.
          My journey in tech has taught me the importance of creativity, resilience, and continuous improvement.
          Whether working on front-end interfaces that delight users or back-end systems that enhance performance,
          I am dedicated to creating solutions that make a difference. Outside of coding, I enjoy exploring emerging
          tech trends and I’m always eager to expand my knowledge in software development and cybersecurity.
        </p>
      </div>

      {/* Skills Section */}
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-row">
          {/* Skill Cards */}
          {[
            { img: 'download.png', name: 'PHP', desc: 'Server-side scripting language for creating dynamic web pages and applications.' },
            { img: 'logo192.png', name: 'React.js', desc: 'JavaScript library for building interactive and reusable UI components.' },
            { img: 'cyber.jpeg', name: 'Cyber Security', desc: 'Knowledge in securing systems and protecting data from cyber threats.' },
            { img: 'HTML.png', name: 'HTML', desc: 'The foundational markup language used to structure web content.' },
            { img: 'CSS.png', name: 'CSS', desc: 'Styling language used to design and layout web pages.' },
            { img: 'tailwind.png', name: 'Tailwind CSS', desc: 'Utility-first CSS framework for building custom, responsive designs efficiently.' },
            { img: 'javascript.jpeg', name: 'JavaScript', desc: 'Powerful scripting language for dynamic, interactive web applications.' },
            { img: 'NODE 2.png', name: 'Node.js', desc: 'JavaScript runtime for building scalable server-side applications.' },
            { img: 'mysql.png', name: 'MySQL', desc: 'Popular relational database management system.' },
            { img: 'git.png', name: 'Git', desc: 'Version control system for tracking changes in source code.' },
            { img: 'team player 2.jpeg', name: 'Team Player', desc: 'I am a dedicated team player.' },
            { img: 'problem solver.jpeg', name: 'Problem Solver', desc: 'Ability to identify and solve problems.' },
          ].map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.name} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
              <p className="skill-description">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-container">
        <h2 className="projects-title">Some of My Projects</h2>
        <div className="projects-row">
          <div className="project-card">
            <img src="project 3.png" alt="Environmental Project" className="project-icon" />
            <p className="project-title">
              Innovative website dedicated to environmental conservation and sustainability.
            </p>
            <a href="https://github.com/bencason23/cleancode-solutions.git" target="_blank" rel="noopener noreferrer">
              <button className="project-github-button">GitHub</button>
            </a>
          </div>
          <div className="project-card">
            <img src="library.jpeg" alt="Library Project" className="project-icon" />
            <p className="project-title">
              Library Management Website designed to streamline the organization and tracking of library resources.
            </p>
            <a href="https://cleancode-solutions.onrender.com" target="_blank" rel="noopener noreferrer">
              <button className="project-github-button">Visit Site</button>
            </a>
          </div>
          <div className="project-card">
            <img src="shoe shop.png" alt="Shoe Shop Project" className="project-icon" />
            <p className="project-title">
              A digital platform where customers can browse, select, and purchase shoes from a wide range of styles.
            </p>
            <a href="https://github.com/bencason23/shoe-shop" target="_blank" rel="noopener noreferrer">
              <button className="project-github-button">GitHub</button>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-container">
        <h2 className="contact-title">Contact Me</h2>
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
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
