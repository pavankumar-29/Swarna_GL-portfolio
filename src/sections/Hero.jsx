import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <motion.p
          className="welcome"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          WELCOME TO MY PORTFOLIO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm
          <br />
          <span>Swarna GL</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              "Credit Risk Analyst",
               2000,
              "AML / KYC Analyst",
               2000,
              "Compliance Analyst",
               2000,
              "Financial Analyst",
               2000,
              "Business Development Professional",
               2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="typing-text"
          />
        </motion.div>

        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I check things for a living — internal controls, expense records, financial transactions, client documents and I've done it across four internships now: NAF Technology Services, M.K. Dandeker & Co LLP, Schwing Stetter, and Innowell Engineering. Along the way I've reviewed 30+ client documents for onboarding accuracy, audited 15+ clients' financial data, and reconciled 20-30 expense records at a time. Currently finishing my MBA in Financial Services at SRM, with NISM certifications in Equity Derivatives and Mutual Fund Distribution.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="#contact">
            <button>Contact Me</button>
          </a>

          <a href="https://drive.google.com/file/d/1dvs2eI02OjZJT3QEVQkPEMn1KYbL-t7B/view?usp=drivesdk">
            <button className="outline">Download Resume</button>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-right"
        animate={{ y: [0, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
      >
        <div className="profile-circle">
  <img src="/WhatsApp Image 2026-07-29 at 10.33.50 AM.jpeg" alt="Swarna GL" />
</div>
      </motion.div>
    </section>
  );
}

export default Hero;
