import { motion } from "framer-motion";
import "../styles/certifications.css";

const certifications = [
  {
    title: "Bloomberg Market Concepts (BMC)",
    issuer: "Bloomberg"
  },
  {
    title: "Bloomberg Finance Fundamentals",
    issuer: "Bloomberg"
  },
  {
    title: "Bloomberg ESG",
    issuer: "Bloomberg"
  },
  {
    title: "NISM Series VIII - Equity Derivatives",
    issuer: "NISM"
  },
  {
    title: "NISM Series V-A - Mutual Fund Distributor",
    issuer: "NISM"
  },
  {
    title: "Risk Management Job Simulation",
    issuer: "Goldman Sachs"
  },
  {
    title: "Investment Banking Job Simulation",
    issuer: "J.P. Morgan"
  },
  {
    title: "Sustainability in Banking",
    issuer: "ACCA"
  }
];

function Certifications() {
  return (
    <section className="certifications" id="certifications">

      <motion.div
        className="cert-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="section-tag">
          CERTIFICATIONS
        </p>

        <h2>
          Professional Certifications
        </h2>

        <p>
          Industry certifications and job simulations that strengthened my
          knowledge in finance, investment banking, risk management,
          sustainability and financial markets.
        </p>

      </motion.div>

      <div className="cert-grid">

        {certifications.map((cert, index) => (

          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >

            <div className="cert-icon">
              📜
            </div>

            <h3>
              {cert.title}
            </h3>

            <span>
              {cert.issuer}
            </span>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;