import React from "react";
// import LoadingAnimation from "./loading";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <audio autoPlay className="absolute -top-0.5 -left-0.5 z-10">
        <source src="audio/meme.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {children}
    </div>
  );
};

export default layout;
