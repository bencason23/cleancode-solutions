import React from 'react';
import '../Pages/Portfolio.css'; // Ensure the path is correct
// Removed unnecessary Header import since it's not used here

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Get My Resume Button */}
      <a href="my cv.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
        Get My Resume
      </a>

      {/* Profile Section */}
      <div className="profile-box">
        <img src="profile.jpg" alt="Profile" className="profile-picture" />
        <h1 className="job-title">ENG.Benson .C. Kamau</h1>
      </div>

      {/* About Me Section */}
      <div className="about-me-container">
        <h2><b>ABOUT ME</b></h2>
        <p className="about-me-description">
           Hi I am a lifelong learner and technology enthusiast who thrives in dynamic and collaborative environments. From a young age, I’ve been drawn to the process of building, troubleshooting, and optimizing applications. My journey in tech has taught me the importance of creativity, resilience, and continuous improvement. Whether working on front-end interfaces that delight users or back-end systems that enhance performance, I am dedicated to creating solutions that make a difference. Outside of coding, I enjoy exploring emerging tech trends, and I’m always eager to expand my knowledge in software development and cyber security.
        </p>
      </div>

      {/* Skills Section */}
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-row">
          {/* Skill Cards */}
          <div className="skill-card">
            <img src="download.png" alt="PHP" className="skill-icon" />
            <p className="skill-name">PHP</p>
            <p className="skill-description">Server-side scripting language for creating dynamic web pages and applications.</p>
          </div>
          <div className="skill-card">
            <img src="logo192.png" alt="React.js" className="skill-icon" />
            <p className="skill-name">React.js</p>
            <p className="skill-description">JavaScript library for building interactive and reusable UI components.</p>
          </div>
          <div className="skill-card">
            <img src="cyber.jpeg" alt="Cyber Security" className="skill-icon" />
            <p className="skill-name">Cyber Security</p>
            <p className="skill-description">Knowledge in securing systems and protecting data from cyber threats.</p>
          </div>
          <div className="skill-card">
            <img src="HTML.png" alt="HTML" className="skill-icon" />
            <p className="skill-name">HTML</p>
            <p className="skill-description">The foundational markup language used to structure web content.</p>
          </div>
          <div className="skill-card">
            <img src="CSS.png" alt="CSS" className="skill-icon" />
            <p className="skill-name">CSS</p>
            <p className="skill-description">Styling language used to design and layout web pages.</p>
          </div>
          <div className="skill-card">
            <img src="tailwind.png" alt="Tailwind CSS" className="skill-icon" />
            <p className="skill-name">Tailwind CSS</p>
            <p className="skill-description">Utility-first CSS framework for building custom, responsive designs efficiently.</p>
          </div>
          <div className="skill-card">
            <img src="javascript.JPEG" alt="JavaScript" className="skill-icon" />
            <p className="skill-name">JavaScript</p>
            <p className="skill-description">Powerful scripting language for dynamic, interactive web applications.</p>
          </div>
          <div className="skill-card">
            <img src="NODE 2.png" alt="Node.js" className="skill-icon" />
            <p className="skill-name">Node.js</p>
            <p className="skill-description">JavaScript runtime for building scalable server-side applications.</p>
          </div>
          <div className="skill-card">
            <img src="mysql.PNG" alt="MySQL" className="skill-icon" />
            <p className="skill-name">MySQL</p>
            <p className="skill-description">Popular relational database management system.</p>
          </div>
          <div className="skill-card">
            <img src="git.PNG" alt="Git" className="skill-icon" />
            <p className="skill-name">Git</p>
            <p className="skill-description">Version control system for tracking changes in source code.</p>
          </div>
          <div className="skill-card">
            <img src="team player 2.JPEG" alt="Git" className="skill-icon" />
            <p className="skill-name">team player</p>
            <p className="skill-description">I am a dedicated team player</p>
          </div>
          <div className="skill-card">
            <img src="problem solver.JPEG" alt="Git" className="skill-icon" />
            <p className="skill-name">problem solver</p>
            <p className="skill-description">ability to indentify and solve problems</p>
          </div>


        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-container">
        <h2 className="projects-title">Some of My Projects</h2>
        <div className="projects-row">
          <div className="project-card">
            <img src="project 3.PNG" alt="Project 1" className="project-icon" />
            <p className="project-title">innovative website dedicated to environmental conservation and sustainability. It provides tools to record and monitor tree plantations, track growth, and maintain detailed ecological data. The platform features a built-in carbon calculator to estimate carbon offset contributions, empowering individuals, organizations, and communities to measure their environmental impact and take informed steps toward a greener future.</p>
            <a href="https://github.com/bencason23/cleancode-solutions.git" target="_blank" rel="noopener noreferrer">
              <button className="project-github-button">GitHub</button>
            </a>
          </div>
          <div className="project-card">
            <img src="library.JPEG" alt="Project 2" className="project-icon" />
            <p className="project-title">Library Management Website is a digital platform designed to streamline the organization and tracking of library resources. It allows users to manage **book records**, including adding, updating, and deleting entries, tracking availability, and categorizing books. The system supports functions like **searching for books**, monitoring borrow/return transactions, and generating reports, making library operations efficient and user-friendly. Ideal for schools, public libraries, and private collections, it enhances accessibility and ensures accurate record-keeping.</p>
            <a href="https://github.com/your-github-username/project2" target="_blank" rel="noopener noreferrer">
              <button className="project-github-button">GitHub</button>
            </a>
          </div>
          <div className="project-card">
            <img src="shoe shop.PNG" alt="Project 3" className="project-icon" />
            <p className="project-title"> a digital platform where customers can browse, select, and purchase shoes from a wide range of styles, brands, and sizes. The website offers convenient features such as product filters, detailed descriptions, size guides, secure payment options, and home delivery. With a user-friendly interface and a variety of shoe categories, from casual to formal, athletic to trendy, an online shoe shop provides a seamless shopping experience from the comfort of your home.</p>
            <a href="https://github.com/your-github-username/project3" target="_blank" rel="noopener noreferrer">
              <button className="project-github-button">GitHub</button>
            </a>
          </div>
          
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-container">
        <h2 className="contact-title">Contact Me</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
