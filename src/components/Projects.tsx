'use client';

export default function Projects() {
  const handlePortfolioBuilderClick = () => {
    window.location.href = 'https://portfolio-builder-rho-gules.vercel.app/';
  };

  return (
    <>
      <hr className="sec-divider" />
      <div className="wrap" id="projects">
        <div className="section-label fade-up">Projects</div>
        <h2 className="section-heading fade-up">
          Selected <em>Work</em>
        </h2>

        <div className="project-card">
          <div>
            <div className="project-header">
              <span className="project-num">01 — Full Stack</span>
              <span className="project-type">Featured</span>
            </div>
            <div className="project-title">EduSphere</div>
            <div className="project-subtitle">Online Learning Management Platform</div>
            <div className="project-desc">
              A full-stack LMS for managing users, courses, and learning content. Built with a focus
              on clean API design, role-based access, and a smooth student experience.
            </div>
            <div className="project-tags">
              <span className="project-tag">React (Vite)</span>
              <span className="project-tag">Tailwind</span>
              <span className="project-tag">Node.js</span>
              <span className="project-tag">Express</span>
              <span className="project-tag">MongoDB</span>
              <span className="project-tag">Multer</span>
              <span className="project-tag">JWT</span>
            </div>
            <div className="project-arrow">
              <a
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/mashroofmashru/Edusphere"
              >
                View on GitHub →
              </a>
            </div>
          </div>
          <ul className="project-bullets">
            <li>Responsive frontend with React (Vite) and reusable Tailwind components</li>
            <li>MVC architecture with clean separation of models, controllers & routes</li>
            <li>RESTful APIs for authentication, course management & content access</li>
            <li>JWT-based authentication with role-based access for students and admins</li>
            <li>Structured MongoDB schemas for users, courses & enrollments</li>
            <li>Secure password hashing and authorization middleware</li>
            <li>Centralized error handling and consistent API validation</li>
            <li>Tested APIs with Postman, version control via Git & GitHub</li>
          </ul>
        </div>

        <div className="project-card">
          <div>
            <div className="project-header">
              <span className="project-num">02 — Full Stack</span>
              <span className="project-type">Marketplace</span>
            </div>
            <div className="project-title">Carverse</div>
            <div className="project-subtitle">Automotive Marketplace Platform</div>
            <div className="project-desc">
              A full-stack automotive marketplace for browsing, listing, and managing car listings
              with image uploads, search filters, and secure user actions.
            </div>
            <div className="project-tags">
              <span className="project-tag">React (Vite)</span>
              <span className="project-tag">Tailwind</span>
              <span className="project-tag">Node.js</span>
              <span className="project-tag">Express</span>
              <span className="project-tag">MongoDB</span>
              <span className="project-tag">Multer</span>
              <span className="project-tag">jwt</span>
            </div>
            <div className="project-arrow">
              <a
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/mashroofmashru/Carverse"
              >
                View on GitHub →
              </a>
            </div>
          </div>
          <ul className="project-bullets">
            <li>Responsive frontend with dynamic car listing and data rendering</li>
            <li>RESTful APIs using Node.js and Express with MVC structure</li>
            <li>JWT-based authentication and authorization for user actions</li>
            <li>MongoDB schemas for users & car listings with proper indexing</li>
            <li>CRUD for car postings, user profiles and search filters</li>
            <li>Image uploads via Multer and Cloudinary integration</li>
            <li>Consistent error handling, validation & API response formatting</li>
          </ul>
        </div>

        <div className="section-label fade-up" style={{ marginTop: '3rem' }}>
          Mini Projects
        </div>
        <div className="mini-grid">
          <div className="mini-card mini-card-clickable" onClick={handlePortfolioBuilderClick}>
            <div className="mini-title">PortfolioBuilder</div>
            <div className="mini-desc">
              An instant portfolio generator that fetches GitHub data to create a sleek,
              responsive developer portfolio with themes, insights, and shareable URLs.
            </div>
            <div className="mini-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">Vite</span>
              <span className="project-tag">GitHub API</span>
            </div>
          </div>
          <div className="mini-card">
            <div className="mini-title">Gemini Clone</div>
            <div className="mini-desc">
              A frontend AI chat interface built with React (Vite) and Tailwind CSS. Integrated OpenAI
              API for real-time AI responses with a clean conversational UI.
            </div>
            <div className="mini-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">Tailwind</span>
              <span className="project-tag">OpenAI API</span>
            </div>
          </div>
          <div className="mini-card">
            <div className="mini-title">Netflix Clone</div>
            <div className="mini-desc">
              A Netflix-style frontend UI built with React.js and Tailwind CSS. Integrated TMDB API to
              fetch and display real-time movie data with responsive layouts.
            </div>
            <div className="mini-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">Tailwind</span>
              <span className="project-tag">TMDB API</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
