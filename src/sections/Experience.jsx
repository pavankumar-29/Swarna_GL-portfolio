import { motion } from "framer-motion";
import "../styles/experience.css";

const experiences = [
  {
    company: "Schwing Stetter India Pvt. Ltd.",
    role: "Finance Intern",
    duration: "May 2025 – June 2025",
    points: [
      "Performed Trade Reconciliation and Settlement processes for financial transactions.",
      "Prepared financial reports and reconciled transaction records using Excel.",
      "Worked with cross-functional teams to improve reporting accuracy and operational efficiency.",
    ],
  },
  {
    company: "M.K. Dandeker & Co. LLP",
    role: "Audit & Compliance Intern",
    duration: "December 2024 – January 2025",
    points: [
      "Assisted in statutory audit procedures and financial verification.",
      "Reviewed financial records for regulatory compliance and documentation.",
      "Prepared audit working papers and supported compliance reporting.",
    ],
  },
  {
    company: "NAF Technology Services India Pvt. Ltd.",
    role: "Finance Intern",
    duration: "June 2024 – July 2024",
    points: [
      "Supported budgeting and financial reporting activities.",
      "Analyzed financial data using Excel for management reports.",
      "Assisted in preparing MIS reports and business analysis.",
    ],
  },
  {
    company: "Innowell Engineering International Pvt. Ltd.",
    role: "Business Development Intern",
    duration: "May 2023 – June 2023",
    points: [
      "Managed customer interactions and business communication.",
      "Coordinated with internal teams to improve client satisfaction.",
      "Maintained documentation and supported business development activities.",
    ],
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">

      <motion.div
        className="experience-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">INTERNSHIPS</p>

        <h2>Professional Experience</h2>

        <p>
          During my internships, I gained practical exposure to finance,
          auditing, compliance, reconciliation, reporting and client
          relationship management.
        </p>
      </motion.div>

      <div className="experience-grid">

        {experiences.map((exp, index) => (

          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >

            <h3>{exp.role}</h3>

            <h4>{exp.company}</h4>

            <span>{exp.duration}</span>

            <ul>

              {exp.points.map((point, i) => (

                <li key={i}>{point}</li>

              ))}

            </ul>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Experience;