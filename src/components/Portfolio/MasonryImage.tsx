import React from "react";

interface MasonryImageProps {
  image: string;
  index: number;
}

function MasonryImage({ image, index }: MasonryImageProps): JSX.Element {
  let width = "100%";
  if (index % 2 === 0) {
    width = "70%";
  }
  return <img style={{ width }} src={image} alt={`slide image ${index}`} />;
}

export default MasonryImage;
