import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";

import "./styles.scss";

const Footer = () => {
  return (
    <motion.footer>
      <section>
        <article>
          <header>Confidence Cutz</header>
          <ul>
            <a href="https://www.instagram.com/california_kingdoc/">
              <SiInstagram />
            </a>
            <FaFacebook />
          </ul>
        </article>
      </section>
      <section>
        <article>
          <a href="tel:3238936719">(323)893-6719</a>
        </article>
        <article>
          <a href="https://www.google.com/search?sxsrf=ALiCzsYn0fP51u2OeN5ODAXIzkDyQ2Jd8g:1654324141372&q=Confidence+Cutz&ludocid=3971325457786703188&gsas=1&lsig=AB86z5Wx4kVSssCCjfSJbZkfEx9D&sa=X&ved=2ahUKEwjmtajWlZP4AhVPmeAKHcE0ADsQoAJ6BAgfEAc&biw=1680&bih=939&dpr=2">
            440 E Manchester Blvd, Inglewood CA 90301
          </a>
        </article>
      </section>
      <section>
        <article>Contact Us</article>
      </section>
    </motion.footer>
  );
};

export default Footer;
