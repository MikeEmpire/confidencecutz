import React from "react";
import Masonry from "react-masonry-css";

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
        {photos.map((p, i) => {
          let width = "100%";
          if (i % 2 === 0) {
            width = "70%";
          }
          return (
            <img
              style={{ width }}
              key={p}
              src={p}
              alt={`slide image ${i + 1}`}
            />
          );
        })}
      </Masonry>
    </div>
  );
}

export default Portfolio;
