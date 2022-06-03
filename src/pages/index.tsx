import * as React from "react";
import { useSpring, animated } from "react-spring";

import mainVideo from "../videos/confidencecutz.mp4";

import "../styles/main.scss";
import Footer from "../components/Footer";
// styles
// markup
const IndexPage = () => {
  const x = useSpring({
    delay: 1500,
    transform: "translateX(-600px)",
    opacity: 0,
    config: { frequency: 1, mass: 1, friction: 2 },
    from: {
      opacity: 1,
      transform: "translateX(0px)",
    },
  });
  const x2 = useSpring({
    opacity: 0,
    delay: 1500,
    transform: "translateX(600px)",
    config: { frequency: 1, mass: 1, friction: 2 },
    from: {
      opacity: 1,
      transform: "translateX(0px)",
    },
  });
  return (
    <main>
      <title>Confidence Cutz</title>
      <div className="video__container">
        <section className="curtain__container">
          <animated.article style={{ ...x }}></animated.article>
          <animated.article style={{ ...x2 }}></animated.article>
        </section>
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
