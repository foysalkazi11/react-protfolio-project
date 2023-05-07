import React from "react";
import ProfilePic from "../images/foysal_kazi.JPG";

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
              Front-end Developer | JavaScript | React JS | Next JS | TypeScript
            </p>
            <p>
              A highly skilled and experienced React Developer with a strong
              background in building responsive and interactive user interfaces.
              Proven track record of delivering high-quality web applications
              using React and other modern technologies. Seeking a challenging
              role in a dynamic organization to utilize my skills and experience
              to contribute to the growth of the company.
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
