import * as React from "react";
import { motion } from "framer-motion";

import mainVideo from "../videos/confidencecutz.mp4";

import "../styles/main.scss";
import Footer from "../components/Footer";

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
  return (
    <main>
      <title>Confidence Cutz</title>
      <motion.div
        style={{
          background: "black",
          position: "absolute",
          width: "100%",
          zIndex: 100,
        }}
        variants={containerVariants}
        animate="hidden"
        initial="appear"
      >
        <motion.h4
          variants={textVariant}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          Confidence Cutz
        </motion.h4>
      </motion.div>
      <div className="video__container">
        <button className="glow-on-hover" id="cta">
          Schedule A Cut
        </button>
        <div id="background-video__mesh" />
        <video id="background-video" autoPlay loop muted>
          <source src={mainVideo} type="video/mp4" />
        </video>
        <div className="vignette" />
      </div>
      <Footer />
    </main>
  );
};

export default IndexPage;
