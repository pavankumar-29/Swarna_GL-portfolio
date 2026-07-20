import { motion } from "framer-motion";
import "../styles/stats.css";

const stats = [
  {
    number: "9.65",
    title: "MBA CGPA",
  },
  {
    number: "4+",
    title: "Internships",
  },
  {
    number: "5+",
    title: "Finance Projects",
  },
  {
    number: "8+",
    title: "Professional Certifications",
  },
];

function Stats() {
  return (
    <section className="stats" id="stats">

      <motion.div
        className="stats-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">ACHIEVEMENTS</p>
        <h2>My Journey in Numbers</h2>
      </motion.div>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <h1>{item.number}</h1>
            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Stats;