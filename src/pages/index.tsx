import * as React from "react";
import { motion } from "framer-motion";

import About from "../components/About";
import BGVideo from "../components/BGVideo";
import Footer from "../components/Footer";

import "../styles/main.scss";

const containerVariants = {
  appear: {
    height: "100%",
    transition: {
      duration: 2,
    },
  },
  hidden: {
    height: 0,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const textVariant = {
  hidden: { y: 0, opacity: 1 },
  appear: { y: 100, opacity: [0, 0.5, 0.7] },
};

const IndexPage = () => {
  const [isAnimationComplete, toggleAnimationStatus] =
    React.useState<boolean>(false);
  const handleAnimationComplete = (): void => {
    toggleAnimationStatus(true);
  };
  return (
    <main>
      <title>Confidence Cutz</title>
      <div className="main-content__container">
        <div className="splash-content__container">
          <motion.div
            style={{
              background: "black",
              position: "absolute",
              zIndex: 100,
              width: "100%"
            }}
            onAnimationComplete={handleAnimationComplete}
            variants={containerVariants}
            animate="hidden"
            initial="appear"
            className="content__container"
          >
            <motion.h4
              variants={textVariant}
              transition={{ type: "spring", bounce: 0.5 }}
              id="title-text"
            >
              Confidence Cutz
            </motion.h4>
            <motion.h6 variants={textVariant} className="subtitle">
              where looking and feeling your best <br />
              is our top priority
            </motion.h6>
            <motion.h6 variants={textVariant} className="title-caption">
              Our services don't stop at haircuts, either. We offer a range of
              grooming services to keep you looking and feeling your best,
              including beard trims, hot shaves, etc!
            </motion.h6>
            <button className="glow-on-hover" id="cta">
              Book A Cut
            </button>
          </motion.div>
          <BGVideo />
          <About />
          <Footer />
        </div>
        <menu>
          <section style={{ backgroundColor: "#6D6875" }}>
            <h6 className="contact-link">Contact Us</h6>
          </section>
          <section style={{ backgroundColor: "#B5838D" }}>
            <h6 className="menu-link">Book A Cut</h6>
          </section>
        </menu>
      </div>
    </main>
  );
};

export default IndexPage;
