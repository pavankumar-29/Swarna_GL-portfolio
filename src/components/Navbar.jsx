import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        Swarna GL
      </h2>

      <div className="nav-links">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#experience">Experience</a>

        <a href="#projects">Projects</a>

        <a href="#certifications">Certificates</a>

        <a href="#contact">Contact</a>

      </div>

      <a
        href="/Swarna_GL_Resume.pdf"
        download
        className="resume-btn"
      >
        Download CV
      </a>

    </nav>
  );
}

export default Navbar;