import Link from 'next/link';

export default function Hero() {
  return (
    <div id="hero">
      <div className="hero-badge">Available for Opportunities</div>
      <h1 className="hero-name">
        Mashroof<br />
        <em>PP</em>
      </h1>
      <p className="hero-title">Full Stack Developer · MERN Stack</p>
      <p className="hero-sub">
        Motivated MERN Stack Developer building clean, maintainable web applications. Strong interest in
        backend development, real-time features, and third-party integrations like Stripe, Cloudinary, and AI APIs.
      </p>
      <div className="hero-contact">
        <a href="mailto:mashroofvlk@gmail.com" className="hero-contact-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          mashroofvlk@gmail.com
        </a>
        <a href="tel:+918078861815" className="hero-contact-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.36a16 16 0 0 0 5.73 5.73l1.73-1.73a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          +91 8078861815
        </a>
        <span className="hero-contact-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Kannur, Kerala
        </span>
      </div>
      <div className="hero-actions">
        <Link href="#projects" className="btn-primary">
          View Projects
        </Link>
        <Link href="#contact" className="btn-ghost">
          Get in Touch
        </Link>
      </div>
      <hr className="hero-divider" />
      <div className="hero-stats">
        <div>
          <div className="stat-num">MERN</div>
          <div className="stat-label">Primary Stack</div>
        </div>
        <div>
          <div className="stat-num">5+</div>
          <div className="stat-label">Full Projects</div>
        </div>
        <div>
          <div className="stat-num">BCA</div>
          <div className="stat-label">CS Degree</div>
        </div>
        <div>
          <div className="stat-num">∞</div>
          <div className="stat-label">Curiosity</div>
        </div>
      </div>
    </div>
  );
}
