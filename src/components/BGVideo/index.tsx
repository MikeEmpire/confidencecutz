import React, { useEffect, useRef } from "react";

interface VideoProps {
  className?: string;
}

function BGVideo({ className }: VideoProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const playPromise = videoRef.current?.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  return (
    <div className="video__container">
      <div id="background-video__mesh" />
      <video
        ref={videoRef}
        id="background-video"
        playsInline
        autoPlay
        loop
        muted
        preload="auto"
        controls={false}
        onPointerDown={() => {}}
        src="/videos/confidencecutz.mp4"
      />
      <div className="vignette" />
    </div>
  );
}

export default BGVideo;
