import { motion } from "framer-motion";
import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="section-tag">CONTACT</p>

        <h2>Let's Connect</h2>

        <p>
          I'm always open to discussing finance, risk management,
          investment research, internships and full-time opportunities.
        </p>

      </motion.div>

      <motion.div
        className="contact-box"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <div className="contact-item">
          <h3>📧 Email</h3>
          <a href="mailto:swarnagl04@gmail.com">
            swarnagl04@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <h3>📱 Phone</h3>
          <a href="tel:+919043104288">
            +91 90431 04288
          </a>
        </div>

        <div className="contact-item">
          <h3>💼 LinkedIn</h3>
          <a
            href="https://linkedin.com/in/swarna-gl"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/swarna-gl
          </a>
        </div>

      </motion.div>

    </section>
  );
}

export default Contact;