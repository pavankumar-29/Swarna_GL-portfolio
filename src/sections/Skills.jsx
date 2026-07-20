import { motion } from "framer-motion";
import "../styles/skills.css";

const skillCategories = [
  {
    title: "Finance Skills",
    skills: [
      "Credit Risk Analysis",
      "AML Investigation",
      "AML / KYC",
      "CDD & EDD",
      "Compliance",
      "Financial Analysis",
      "Financial Statement Analysis",
      "Ratio Analysis",
      "Investment Research",
      "Risk Assessment",
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      "Advanced Excel",
      "SQL",
      "Python",
      "Power BI",
      "Bloomberg Terminal",
      "MS Office",
      "Financial Modelling",
      "Data Analysis",
      "Financial Reporting",
      "Dashboard Development",
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      "Business Development",
      "Analytical Thinking",
      "Problem Solving",
      "Communication",
      "Leadership",
      "Decision Making",
      "Stakeholder Management",
      "Presentation Skills",
      "Time Management",
      "Team Collaboration",
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-tag">MY SKILLS</p>

        <h2>Professional Skills & Expertise</h2>

        <p>
          My expertise combines Finance, Risk Management and Technology to
          deliver practical business solutions.
        </p>
      </motion.div>

      <div className="skills-grid">

        {skillCategories.map((category, index) => (

          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >

            <h3>{category.title}</h3>

            <div className="skill-list">

              {category.skills.map((skill, i) => (

                <span key={i}>{skill}</span>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;