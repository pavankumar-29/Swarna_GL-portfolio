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
        href="https://drive.google.com/file/d/1dvs2eI02OjZJT3QEVQkPEMn1KYbL-t7B/view?usp=drivesdk"
        download
        className="resume-btn"
      >
        View CV
      </a>

    </nav>
  );
}

export default Navbar;
