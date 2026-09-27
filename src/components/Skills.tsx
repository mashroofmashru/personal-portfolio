export default function Skills() {
  return (
    <>
      <hr className="sec-divider" />
      <div className="wrap" id="skills">
        <div className="section-label fade-up">Technical Skills</div>
        <h2 className="section-heading fade-up">
          Tech <em>Stack</em>
        </h2>
        <div className="skills-grid fade-up">
          <div className="skill-group">
            <div className="skill-group-title">Frontend</div>
            <div className="skill-items">
              <span className="skill-pill">React.js</span>
              <span className="skill-pill">HTML5</span>
              <span className="skill-pill">CSS3</span>
              <span className="skill-pill">Tailwind CSS</span>
              <span className="skill-pill">Bootstrap</span>
              <span className="skill-pill">TypeScript</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-title">Backend</div>
            <div className="skill-items">
              <span className="skill-pill">Node.js</span>
              <span className="skill-pill">Express.js</span>
              <span className="skill-pill">JavaScript ES6+</span>
              <span className="skill-pill">REST APIs</span>
              <span className="skill-pill">MVC Architecture</span>
              <span className="skill-pill">JWT Auth</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-title">Database & Storage</div>
            <div className="skill-items">
              <span className="skill-pill">MongoDB</span>
              <span className="skill-pill">PostgreSQL</span>
              <span className="skill-pill">Multer</span>
              <span className="skill-pill">Cloudinary</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-title">Integrations & Tools</div>
            <div className="skill-items">
              <span className="skill-pill">Stripe</span>
              <span className="skill-pill">Razorpay</span>
              <span className="skill-pill">Gemini API</span>
              <span className="skill-pill">OpenAI</span>
              <span className="skill-pill">Git & GitHub</span>
              <span className="skill-pill">Postman</span>
              <span className="skill-pill">Figma</span>
              <span className="skill-pill">VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
