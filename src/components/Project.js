import React, { useState } from "react";
import Popup from "./Popup";
import yourMoment from "../images/project pic/your-moments.png";
import githubUserSearch from "../images/project pic/github-user-search-project.png";
import cocktaildbApiProject from "../images/project pic/cocktaildb-api-project.png";
import { FaSearch } from "react-icons/fa";
const projectDetails = [
  {
    title: "Share Moments",
    img: yourMoment,
    technologyUse:
      "MERN stack, User authencation with Passport and JWT,Image hosting at Cloudinary, Mapbox for Maping the places and much more",
    demoUrl: "https://your-moments.netlify.app/",
    githubUrl: "https://github.com/foysalkazi11/your-moments"
  },
  {
    title: "CocktailDB Api",
    img: cocktaildbApiProject,
    technologyUse:
      "React,React-router-dom,React-hooks,React-context-api, CocktailDB Api,Css flexbox and grid",
    demoUrl: "https://gifted-varahamihira-d66b31.netlify.app/",
    githubUrl: "https://github.com/foysalkazi11/react-cocktail-api-project"
  },
  {
    title: "Github User Search",
    img: githubUserSearch,
    technologyUse:
      "React, React-hooks, React-context-api,Github user Api,Css flexbox and grid",
    demoUrl: "https://eager-sammet-6d459c.netlify.app/",
    githubUrl: "https://github.com/foysalkazi11/react-githubUserSearch-project"
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
          <div className="single-project-info">
            <img src={yourMoment} alt="project-pic" />
            <div className="overlay">
              <FaSearch
                className="search-icon"
                onClick={() => selectProject("Share Moments")}
              />
            </div>
          </div>

          <div className="single-project-info">
            <img src={cocktaildbApiProject} alt="project-pic" />
            <div className="overlay">
              <FaSearch
                className="search-icon"
                onClick={() => selectProject("CocktailDB Api")}
              />
            </div>
          </div>

          <div className="single-project-info">
            <img src={githubUserSearch} alt="project-pic" />
            <div className="overlay">
              <FaSearch
                className="search-icon"
                onClick={() => selectProject("Github User Search")}
              />
            </div>
          </div>
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
