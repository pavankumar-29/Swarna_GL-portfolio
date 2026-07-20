import { motion } from "framer-motion";
import "../styles/leadership.css";

const leadership = [
  {
    title: "Deputy Secretary",
    organization: "Ridhi Finance Club",
    description:
      "Organized finance events, coordinated student activities and worked with faculty to conduct workshops and competitions.",
  },
  {
    title: "Class Committee Representative",
    organization: "SRM Institute of Science and Technology",
    description:
      "Acted as a communication bridge between students and faculty while coordinating academic activities.",
  },
  {
    title: "Green Rotaractor",
    organization: "Rotaract Club",
    description:
      "Participated in social initiatives, environmental awareness programs and community service activities.",
  },
  {
    title: "Ideafest Participant",
    organization: "Innovation & Entrepreneurship",
    description:
      "Presented innovative finance and business ideas during institutional innovation events.",
  },
];

function Leadership() {
  return (
    <section className="leadership" id="leadership">

      <motion.div
        className="leadership-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">LEADERSHIP</p>

        <h2>Leadership & Activities</h2>

        <p>
          Beyond academics, I actively contribute through leadership,
          teamwork, event management and community engagement.
        </p>
      </motion.div>

      <div className="leadership-grid">

        {leadership.map((item, index) => (

          <motion.div
            key={index}
            className="leadership-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >

            <div className="leadership-icon">⭐</div>

            <h3>{item.title}</h3>

            <h4>{item.organization}</h4>

            <p>{item.description}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Leadership;