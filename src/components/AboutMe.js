import React from "react";
import ProfilePic from "../images/profile-pic.jpg";

const AboutMe = () => {
  return (
    <section className="wraper aboutMe-wraper">
      <div className="section aboutMe-container">
        <div className="aboutMe-info">
          <div className="profile-pic">
            <img src={ProfilePic} alt="Profile-pic" />
          </div>
          <div className="profile-info">
            <h1>
              Hi. I'm <span>Md Foysal Kazi</span>
            </h1>
            <p className="sub-heading">Full-Stack JavaScript Developer </p>
            <p>
              From that moment I realized that I enjoy working with computer, I
              decided to build my career in the field of web development. I
              started learning html, css and JavaScript one by one and soon I
              felt I hooked up and enjoy working in this field.
              <br /> Web development has never been “just a earning source” for
              me, it’s offered and engaging challenge to continually learn and
              improve my skills in creating high-quality software develop. Now
              it’s become a fully-fledged passion that only gets more exciting
              as the days go by.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
