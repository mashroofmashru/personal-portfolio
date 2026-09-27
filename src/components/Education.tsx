export default function Education() {
  return (
    <>
      <hr className="sec-divider" />
      <div className="wrap" id="education">
        <div className="section-label fade-up">Education</div>
        <h2 className="section-heading fade-up">
          Academic <em>Background</em>
        </h2>

        <div className="edu-item">
          <div className="edu-period">2023 — Present</div>
          <div>
            <div className="edu-degree">Bachelor of Computer Applications</div>
            <div className="edu-school">SES College, Sreekandapuram · Kannur University</div>
            <div className="edu-detail">
              Studying core CS fundamentals — data structures, algorithms, DBMS, and software
              engineering. Actively building full-stack projects using the MERN stack alongside academics.
            </div>
          </div>
        </div>

        <div className="edu-item">
          <div className="edu-period">2021 — 2023</div>
          <div>
            <div className="edu-degree">Higher Secondary Education</div>
            <div className="edu-school">Govt. Higher Secondary School, Koyyam, Kannur · Bio Science</div>
            <div className="edu-detail">
              Completed higher secondary with a focus on science subjects. Developed an early interest
              in technology and self-taught programming fundamentals during this period.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
