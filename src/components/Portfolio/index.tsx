import React from "react";
import Masonry from "react-masonry-css";

import MasonryImage from "./MasonryImage";

import "../../styles/masonry.scss";

const photos: string[] = [
  "https://allesimages.s3.us-west-1.amazonaws.com/grid-1.jpg",
  "https://allesimages.s3.us-west-1.amazonaws.com/grid-2.jpg",
  "https://allesimages.s3.us-west-1.amazonaws.com/grid-3.jpg",
  "https://allesimages.s3.us-west-1.amazonaws.com/grid-4.jpg",
  "https://allesimages.s3.us-west-1.amazonaws.com/grid-5.jpg",
  "https://allesimages.s3.us-west-1.amazonaws.com/grid-6.jpg",
  "https://allesimages.s3.us-west-1.amazonaws.com/grid-7.jpg",
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};
function Portfolio(): JSX.Element {
  return (
    <div className="portfolio-section__container">
      <h5>Portfolio</h5>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="portfolio__container"
        columnClassName="portfolio__column"
      >
        {photos.map((p, i) => (
          <MasonryImage image={p} index={i} key={p} />
        ))}
      </Masonry>
    </div>
  );
}

export default Portfolio;
