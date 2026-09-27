export default function About() {
  return (
    <>
      <hr className="sec-divider" />
      <div className="wrap" id="about">
        <div className="about-grid">
          <div className="about-left fade-up">
            <div className="about-avatar">
              <span className="avatar-initials">MP</span>
            </div>
            <div className="about-meta">
              <div className="meta-row">
                <span>Name</span>
                <span>Mashroof PP</span>
              </div>
              <div className="meta-row">
                <span>Location</span>
                <span>Kannur, Kerala</span>
              </div>
              <div className="meta-row">
                <span>Education</span>
                <span>BCA — Kannur Univ.</span>
              </div>
              <div className="meta-row">
                <span>Status</span>
                <span style={{ color: 'var(--accent)' }}>● Open to Work</span>
              </div>
            </div>
          </div>
          <div>
            <div className="section-label fade-up">About Me</div>
            <h2 className="section-heading fade-up">
              Building for<br />
              the <em>web</em>
            </h2>
            <p className="about-body fade-up">
              I'm a MERN Stack Developer with hands-on experience building full-stack web
              applications from scratch. I enjoy crafting clean backend APIs and responsive frontends that work seamlessly
              together.
            </p>
            <p className="about-body fade-up">
              Particularly interested in backend architecture, authentication systems, real-time
              features, and integrating third-party services — Stripe, Razorpay, Cloudinary, and AI APIs like Gemini and
              OpenAI.
            </p>
            <p className="about-body fade-up">
              Eager to contribute to real-world projects, learn fast on the job, and grow as a
              developer while writing code that others can understand and build on.
            </p>
            <div className="interest-tags fade-up">
              <span className="tag">Technology</span>
              <span className="tag">Backend Systems</span>
              <span className="tag">Software Dev</span>
              <span className="tag">AI & APIs</span>
              <span className="tag">Data Analysis</span>
              <span className="tag">Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
