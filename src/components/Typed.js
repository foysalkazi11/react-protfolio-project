import React from "react";
import Typed from "react-typed";

const Typeds = () => {
  return (
    <div className="typed-container">
      <Typed
        className="typed-text"
        strings={["Web Development", "Web Design", "MERN Stack Development"]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
};

export default Typeds;
