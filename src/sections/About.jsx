import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBriefcase,
  FaProjectDiagram,
  FaCertificate,
} from "react-icons/fa";
import "../styles/about.css";

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-tag">ABOUT ME</p>

        <h2>Who Am I?</h2>

        <p className="about-intro">
          I am an MBA (Financial Services) student at SRM Institute of Science
          and Technology with hands-on experience in Credit Risk Analysis,
          AML/KYC, Compliance, Business Development and Financial Analysis.
          I enjoy transforming financial data into actionable business insights
          using Excel, SQL, Python and Power BI. My goal is to contribute to
          organizations by solving complex financial problems through analytical
          thinking, risk assessment and data-driven decision making.
        </p>
      </motion.div>

      <div className="about-grid">

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FaUserGraduate className="about-icon" />

          <h3>Education</h3>

          <p>MBA (Financial Services)</p>

          <p>SRM Institute of Science & Technology</p>

          <span>CGPA : 9.65 / 10</span>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <FaBriefcase className="about-icon" />

          <h3>Internships</h3>

          <p>Business Development</p>

          <p>Finance</p>

          <p>Audit & Compliance</p>

          <span>4 Professional Internships</span>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <FaProjectDiagram className="about-icon" />

          <h3>Projects</h3>

          <p>AML Investigation Dashboard</p>

          <p>Financial Ratio Analysis</p>

          <p>Mortgage Research</p>

          <span>4 Major Projects</span>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <FaCertificate className="about-icon" />

          <h3>Certifications</h3>

          <p>Bloomberg</p>

          <p>NISM</p>

          <p>Goldman Sachs</p>

          <span>8 Professional Certifications</span>
        </motion.div>

      </div>

    </section>
  );
}

export default About;