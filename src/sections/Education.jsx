import { motion } from "framer-motion";
import "../styles/education.css";

const educationData = [
  {
    degree: "MBA - Financial Services",
    institution: "SRM Institute of Science and Technology",
    year: "2024 – 2026",
    score: "CGPA : 9.65",
  },
  {
    degree: "Bachelor of Commerce (B.Com)",
    institution: "Sri Kanyaka Parameswari Arts & Science College",
    year: "2021 – 2024",
    score: "CGPA : 8.48",
  },
];

function Education() {
  return (
    <section className="education" id="education">

      <motion.div
        className="education-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-tag">EDUCATION</p>

        <h2>Academic Journey</h2>

        <p>
          My academic background has provided a strong foundation in finance,
          accounting, risk management, business analytics, and data-driven
          decision making.
        </p>
      </motion.div>

      <div className="timeline">

        {educationData.map((item, index) => (

          <motion.div
            className="timeline-card"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >

            <h3>{item.degree}</h3>

            <h4>{item.institution}</h4>

            <span>{item.year}</span>

            <p>{item.score}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Education;