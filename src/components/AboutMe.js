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
              Highly skilled and motivated Front-End Web Developer with almost 3
              years of experience in delivering cutting-edge digital solutions.
              Proficient in HTML, CSS, and JavaScript, with a strong focus on
              React.js, Next.js, and Typescript for building performant and
              scalable websites. Adept at integrating back-end services or
              REST/GraphQL APIs to ensure seamless functionality. Committed to
              adhering to the best software development practices and delivering
              high-quality solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
