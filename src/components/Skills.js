import React from "react";
import html5 from "../images/skills/1.png";
import css3 from "../images/skills/2.png";
import boostrape from "../images/skills/3.jpg";
import JavaScript from "../images/skills/4.png";
import react from "../images/skills/5.png";
import nodeJS from "../images/skills/6.png";
import express from "../images/skills/7.jpg";
import mongoDB from "../images/skills/8.png";
import material from "../images/skills/9.png";
import firebase from "../images/skills/10.jpg";
import sass from "../images/skills/11.jpg";

const Skills = () => {
  return (
    <section id="skills" className="wraper skills-wraper">
      <div className="section skills-container">
        <h1>Here's all the skills I have</h1>
        <div className="skills-info">
          <img src={html5} alt="html5" />
          <img src={css3} alt="css3" />
          <img src={sass} alt="css3" />
          <img src={boostrape} alt="boostrape" />
          <img src={react} alt="react" />
          <img src={JavaScript} alt="JavaScript" />
          <img src={material} alt="material" />
          <img src={firebase} alt="firebase" />

          <img src={nodeJS} alt="nodeJS" />
          <img src={express} alt="express" />
          <img src={mongoDB} alt="mongoDB" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
