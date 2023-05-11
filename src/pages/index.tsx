import * as React from "react";
import { motion } from "framer-motion";

import mainVideo from "../videos/confidencecutz.mp4";

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
  return (
    <main>
      <title>Confidence Cutz</title>
      <div>
        <div>
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
            className="content__container"
          >
            <motion.h4
              variants={textVariant}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              Confidence Cutz
            </motion.h4>
            <h6 className="subtitle">
              where looking and feeling your best is our top priority
            </h6>
            <h6 className="title-caption">
              Our services don't stop at haircuts, either. We offer a range of
              grooming services to keep you looking and feeling your best,
              including beard trims, hot shaves, etc!
            </h6>
            <button className="glow-on-hover" id="cta">
              Book A Cut
            </button>
          </motion.div>
          <div className="video__container">
            <div id="background-video__mesh" />
            <video id="background-video" autoPlay loop muted>
              <source src={mainVideo} type="video/mp4" />
            </video>
            <div className="vignette" />
          </div>
          <Footer />
        </div>
        <menu>
          <section>
            <h6 className="contact-link">Contact Us</h6>
          </section>
          <section>
            <h6 className="menu-link">Book A Cut</h6>
          </section>
        </menu>
      </div>
    </main>
  );
};

export default IndexPage;
