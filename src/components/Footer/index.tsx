import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";

const Footer = () => {
  return (
    <motion.footer>
      <section style={{ flexDirection: "row", gap: "1.4em" }}>
        <SiInstagram size="24" />
        <FaFacebook size="24" />
      </section>
      <section>
        <header>Find us at</header>
        <a href="https://www.google.com/search?sxsrf=ALiCzsYn0fP51u2OeN5ODAXIzkDyQ2Jd8g:1654324141372&q=Confidence+Cutz&ludocid=3971325457786703188&gsas=1&lsig=AB86z5Wx4kVSssCCjfSJbZkfEx9D&sa=X&ved=2ahUKEwjmtajWlZP4AhVPmeAKHcE0ADsQoAJ6BAgfEAc&biw=1680&bih=939&dpr=2">
          440 E Manchester Blvd <br /> Inglewood CA 90301
        </a>
      </section>
    </motion.footer>
  );
};

export default Footer;
