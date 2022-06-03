import React from "react";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";

import "./styles.scss"

const Footer = () => {
  return (
    <footer>
      <section>
        <article>
          <header>Confidence Cutz</header>
          <ul>
            <FaFacebook />
            <SiInstagram />
          </ul>
        </article>
      </section>
      <section>
        <article>(323)893-6719</article>
        <article>440 E Manchester Blvd, Inglewood CA 90301</article>
      </section>
      <section>
        <article>Schedule A Cut</article>
        <article>Contact Us</article>
      </section>
    </footer>
  );
};

export default Footer;
