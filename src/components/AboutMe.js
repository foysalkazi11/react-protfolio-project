import React from "react";
import ProfilePic from "../images/profile-pic.jpg";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="wraper aboutMe-wraper">
      <div className="section aboutMe-container">
        <div className="aboutMe-info">
          <div className="profile-pic">
            <img src={ProfilePic} alt="Profile-pic" />
          </div>
          <div className="profile-info">
            <h1>
              Hi. I'm <span>Md Foysal Kazi</span>
            </h1>
            <p className="sub-heading">
              React Developer | MERN Stack Developer{" "}
            </p>
            <p>
              I am self-taught web developer. Focusing on React I am also
              learning MERN stack development. My goal is to land entry/medium
              level front-end/back-end web development job based on my skills
              and grow my career as a full-stack javaScript developer.
              <br /> Web development has never been “just a earning source” for
              me, it’s always offer me engaging challenge to continuously learn
              and improve my skills. Now it’s become a fully-fledged passion
              that only gets more exciting as the days go by.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
