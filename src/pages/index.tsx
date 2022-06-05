import * as React from "react";
import { useSpring, animated } from "react-spring";

import mainVideo from "../videos/confidencecutz.mp4";

import "../styles/main.scss";
import Footer from "../components/Footer";
// styles
// markup
const IndexPage = () => {
  const x = useSpring({
    delay: 900,
    transform: "translateX(-600px)",
    opacity: 0,
    config: { frequency: 5, mass: 5, friction: 20 },
    from: {
      opacity: 1,
      transform: "translateX(0px)",
    },
  });
  const x2 = useSpring({
    opacity: 0,
    delay: 900,
    transform: "translateX(600px)",
    config: { frequency: 5, mass: 5, friction: 20 },
    from: {
      opacity: 1,
      transform: "translateX(0px)",
    },
  });
  const textAppear = useSpring({
    opacity: 1,
    config: { frequency: 1, mass: 1, friction: 2 },
    deplay: 7500,
    from: { opacity: 0 },
  });
  return (
    <main>
      <title>Confidence Cutz</title>
      <div className="video__container">
        <button className="glow-on-hover" id="cta">Schedule A Cut</button>
        <section className="curtain__container">
          <animated.article style={{ ...x }}></animated.article>
          <animated.article style={{ ...x2 }}></animated.article>
        </section>
        <animated.h4 style={{ ...textAppear }}>
          <span>Confidence </span>
          <span>Cutz</span>
        </animated.h4>
        <div id="background-video__mesh" />
        <video id="background-video" autoPlay loop muted>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </div>
      <Footer />
    </main>
  );
};

export default IndexPage;
