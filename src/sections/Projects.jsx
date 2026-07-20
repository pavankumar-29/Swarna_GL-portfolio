import { motion } from "framer-motion";
import "../styles/projects.css";

const projects = [
  {
    title: "Research on the Impact of Mortgage Forbearance on Senior Homeowners' Financial Stability",
    description:
      "Conducted a research study on the impact of mortgage forbearance on the financial stability of senior homeowners with active mortgage loans in Chennai. Collected and analyzed primary data from 150+ respondents to evaluate short-term benefits and long-term financial implications using statistical analysis.",
    technologies: [
      "Research",
      "Statistical Analysis",
      "Data Collection",
      "Financial Analysis"
    ]
  },

  {
    title: "Research on Entrepreneurial Challenges and Government Scheme Awareness",
    description:
      "Conducted a research study to identify key challenges faced by entrepreneurs and assess awareness of government support schemes. Gathered and analyzed responses from 100+ participants to evaluate business constraints, funding issues and the effectiveness of government initiatives.",
    technologies: [
      "Research",
      "Survey Analysis",
      "Data Interpretation",
      "Business Analysis"
    ]
  },

  {
    title: "Ashok Leyland Financial Ratio Analysis",
    description:
      "Performed a comprehensive financial analysis of Ashok Leyland using three years of financial statements. Calculated and interpreted 12 key financial ratios to evaluate profitability, liquidity, solvency, efficiency and overall financial performance.",
    technologies: [
      "Financial Analysis",
      "Ratio Analysis",
      "Excel",
      "Financial Statements"
    ]
  },

  {
    title: "AML Risk Investigation & Monitoring Dashboard",
    description:
      "Designed an AML scoring framework analyzing 500+ customer records across risk score, country risk and transaction behaviour, identifying 47 high-risk accounts (9.4%) for investigation. Built a dashboard that reduced average case review time from 120 minutes to 40 minutes, improving investigation efficiency and alert prioritization.",
    technologies: [
      "Power BI",
      "AML",
      "Risk Analytics",
      "SQL",
      "Excel"
    ]
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="section-tag">
          PROJECTS
        </p>

        <h2>
          Featured Projects
        </h2>

        <p>
          A collection of finance, risk management and data analytics projects
          demonstrating practical problem-solving and business analysis skills.
        </p>

      </motion.div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >

            <div className="project-number">
              0{index + 1}
            </div>

            <h3>{project.title}</h3>

            <span>{project.tech}</span>

            <p>{project.description}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;