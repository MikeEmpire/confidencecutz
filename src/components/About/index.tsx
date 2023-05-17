import React from "react";

import "../../styles/about.scss";

function About(): JSX.Element {
  return (
    <section id="about-section">
      <h3>
        Doc is a Los Angeles-based entrepreneur and the proud owner of
        Confidence Cutz, a company that specializes in creating personalized
        grooming experiences for men. With a passion for helping others feel
        confident and empowered, Doc has been serving the community for over a
        decade, offering top-quality haircuts, shaves, and grooming services
        that are tailored to each client's individual needs.
      </h3>
      <figure>
        <img src="/images/doc.png" />
        <figcaption>
          <h5>Doc Barber</h5>
          <h6>Owner</h6>
          Doc's expertise in men's grooming is unmatched, and his commitment to
          providing exceptional service has earned him a loyal following among
          his clients. His dedication to his craft and his clients is evident in
          every cut.
        </figcaption>
      </figure>
    </section>
  );
}

export default About;
