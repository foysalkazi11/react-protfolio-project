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
              Front-end Developer | React JS | Next JS{" "}
            </p>
            <p>
              I am a front-end developer skill at React. My goal is to
              continuously improve my skill and serve quality work by writing
              clean and reusable code using the latest web development
              technology.
              <br />
              Proficient in creating user interfaces, writing and testing code,
              troubleshooting simple/complex issues, implementing new features
              based on client requirement or user feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
