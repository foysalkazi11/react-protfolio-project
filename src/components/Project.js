import React, { useState } from "react";
import Popup from "./Popup";
import yourMoment from "../images/project pic/your-moments.png";
import githubUserSearch from "../images/project pic/github-user-search-project.png";
import cocktaildbApiProject from "../images/project pic/cocktaildb-api-project.png";
import jsEcommerce from "../images/project pic/javaScript e-commerce project.png";
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
    title: "React - CocktailDB Api",
    img: cocktaildbApiProject,
    technologyUse:
      "React,React-router-dom,React-hooks,React-context-api, CocktailDB Api,Css flexbox and grid",
    demoUrl: "https://gifted-varahamihira-d66b31.netlify.app/",
    githubUrl: "https://github.com/foysalkazi11/react-cocktail-api-project"
  },
  {
    title: "React - Github User Api",
    img: githubUserSearch,
    technologyUse:
      "React, React-hooks, React-context-api,Github user Api,Css flexbox and grid",
    demoUrl: "https://eager-sammet-6d459c.netlify.app/",
    githubUrl: "https://github.com/foysalkazi11/react-githubUserSearch-project"
  },
  {
    title: "JS - E-commerce Project",
    img: jsEcommerce,
    technologyUse:
      " JavaScript, Grid Image Gallery, Regex, Slick Slider, Modal, Local storage and fully responsive in all device.",
    demoUrl: "https://dream-shop.netlify.app/",
    githubUrl: "https://github.com/foysalkazi11/javaScript-ecommerce-site"
  }
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
