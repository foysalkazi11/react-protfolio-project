import React, { useState } from "react";
import Popup from "./Popup";
import yourMoment from "../images/project pic/your-moments.png";
import cocktaildbApiProject from "../images/project pic/cocktaildb-api-project.png";
import cloudServerSetup from "../images/project pic/cloud server setup.png";
import marketing from "../images/project pic/marketing.png";
import { FaSearch } from "react-icons/fa";
const projectDetails = [
  {
    title: "MERN Stack - Moment",
    img: yourMoment,
    technologyUse:
      "MERN stack, User authencation with Passport and JWT,Image hosting at Cloudinary, Mapbox for Maping the places and much more",
    demoUrl: "https://your-moments.netlify.app/",
    githubUrl: "https://github.com/foysalkazi11/your-moments"
  },
  {
    title: "React - Cloud Server Setup",
    img: cloudServerSetup,
    technologyUse:
      "React,React-router-dom,Framer-motion,React-modal,React-slick,styled-componets,tailwindcss",
    demoUrl: "https://serverify-572b3.web.app/",
    githubUrl: "https://github.com/mztechcorp/template_Cloud_Server_Setup"
  },
  {
    title: "React - CocktailDB Api",
    img: cocktaildbApiProject,
    technologyUse:
      "React,React-router-dom,React-hooks,React-context-api, CocktailDB Api,Css flexbox and grid",
    demoUrl: "https://gifted-varahamihira-d66b31.netlify.app/",
    githubUrl: "https://github.com/foysalkazi11/react-cocktail-api-project"
  },
  {
    title: "React - Marketing Team",
    img: marketing,
    technologyUse:
      "React,React-router-dom,Framer-motion,React-modal,React-slick,styled-componets,tailwindcss",
    demoUrl: "https://tradezilla-3da7a.web.app/",
    githubUrl: "https://github.com/mztechcorp/template_marketing"
  },

 
];

const Project = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [projectDis, setprojectDis] = useState({
    title: "",
    img: "",
    technologyUse: "",
    demoUrl: "",
    githubUrl: ""
  });
  const selectProject = (name) => {
    setIsOpen(true);
    //eslint-disable-next-line
    return projectDetails.map((project) => {
      if (project.title === name) {
        setprojectDis((pre) => {
          return {
            ...pre,
            title: project.title,
            img: project.img,
            technologyUse: project.technologyUse,
            demoUrl: project.demoUrl,
            githubUrl: project.githubUrl
          };
        });
      }
    });
  };

  return (
    <section id="projects" className="wraper project-wraper">
      <div className="section project-container">
        <h1>Here’s some stuff I made recently.</h1>
        <div className="project-info">
          {projectDetails.map((project) => {
            return (
              <div key={project.title} className="single-project-info">
                <img src={project.img} alt="project-pic" />
                <h4>{project.title}</h4>
                <div className="overlay">
                  <FaSearch
                    className="search-icon"
                    onClick={() => selectProject(project.title)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <Popup
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          projectDis={projectDis}
        />
      </div>
    </section>
  );
};

export default Project;
