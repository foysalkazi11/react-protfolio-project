import React from "react";
import Typed from "react-typed";

const Typeds = () => {
  return (
    <div className="typed-container">
      <Typed
        className="typed-text"
        strings={[
          "Front-end Developer",
          "React Developer",
          "MERN Stack Developer",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
};

export default Typeds;
