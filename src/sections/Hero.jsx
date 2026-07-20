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
          MBA (Financial Services) student with experience in Credit Risk,
          AML/KYC, Compliance, Financial Analysis, Business Development,
          Investment Research, SQL, Power BI, Python and Excel.
          Passionate about solving financial problems through analytical
          thinking and data-driven decision making.
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

          <a href="/Swarna_GL_Resume.pdf" download>
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
  <img src="/hero.jpeg" alt="Swarna GL" />
</div>
      </motion.div>
    </section>
  );
}

export default Hero;