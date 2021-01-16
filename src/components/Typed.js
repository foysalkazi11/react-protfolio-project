import React from "react";
import Typed from "react-typed";

const Typeds = () => {
  return (
    <div className="typed-container">
      <Typed
        className="typed-text"
        strings={[
          "Web Development",
          "Web Design",
          "React Developer",
          "MERN Stack Developer"
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
};

export default Typeds;
