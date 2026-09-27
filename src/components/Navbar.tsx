import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="#hero" className="nav-logo">
        Mashroof PP
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#education">Education</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <a href="mailto:mashroofvlk@gmail.com" className="nav-cta">
        Hire Me
      </a>
    </nav>
  );
}
