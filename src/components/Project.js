import React, { useState } from "react";
import Popup from "./Popup";
import yourMoment from "../images/project pic/your-moments.png";
import cocktaildbApiProject from "../images/project pic/cocktaildb-api-project.png";
// import cloudServerSetup from "../images/project pic/cloud server setup.png";
// import marketing from "../images/project pic/marketing.png";
// import mzEcom from "../images/project pic/MzEcom.png";
import furniture from "../images/project pic/Jenni-Kayne.png";
//import reactMui from "../images/project pic/reactMui.png";
//import bimaXpress from "../images/project pic/bimaXpress.png";
import js_ecommerce from "../images/project pic/javaScript e-commerce project.png";
import { FaSearch } from "react-icons/fa";
const projectDetails = [
  // {
  //   title: "MzEcom",
  //   img: mzEcom,
  //   technologyUse:"React, React-redux, Material-UI, Firebase authentication, Node JS, Express JS, MySQL.",
  //   demoUrl: "https://mzecom.web.app/",
  //   githubUrl: "https://github.com/mztechcorp/mzecom-client"
  // },
  {
    title: "Moment",
    img: yourMoment,
    technologyUse:
      "React, React Context API, Node JS, Express JS, MongoDB, Passport with JWT, Cloudinary, Mapbox",
    demoUrl: "https://your-moments.netlify.app/",
    githubUrl: "https://github.com/foysalkazi11/your-moments",
  },

  // {
  //   title: "BimaXpress",
  //   img: bimaXpress,
  //   technologyUse: "React, TypeScript, Tailwindcss",
  //   demoUrl: "https://heuristic-heyrovsky-c7b3a2.netlify.app/",
  //   githubUrl:
  //     "https://github.com/foysalkazi11/bimaXpress_react_tailwind_typescript",
  // },
  {
    title: "Jenni Kayne",
    img: furniture,
    technologyUse:
      "React, React Context API, Node JS, Express JS, MongoDB,JSON Web Token (JWT),",
    demoUrl: "https://hopeful-goodall-7769f7.netlify.app/",
    githubUrl: "https://github.com/foysalkazi11/mern-furniture-store",
  },
  // {
  //   title: "Cloud Server Setup",
  //   img: cloudServerSetup,
  //   technologyUse:
  //     "React,React-router-dom,Framer-motion,React-modal,React-slick,styled-componets,tailwindcss",
  //   demoUrl: "https://serverify-572b3.web.app/",
  //   githubUrl: "https://github.com/mztechcorp/template_Cloud_Server_Setup",
  // },

  // {
  //   title: "Marketing",
  //   img: marketing,
  //   technologyUse:
  //     "React,React-router-dom,Framer-motion,React-modal,React-slick,styled-componets,tailwindcss",
  //   demoUrl: "https://tradezilla-3da7a.web.app/",
  //   githubUrl: "https://github.com/mztechcorp/template_marketing",
  // },

  {
    title: "CocktailDB Api",
    img: cocktaildbApiProject,
    technologyUse:
      "React,React-router-dom,React-hooks,React-context-api, CocktailDB Api,Css flexbox and grid",
    demoUrl: "https://gifted-varahamihira-d66b31.netlify.app/",
    githubUrl: "https://github.com/foysalkazi11/react-cocktail-api-project",
  },
  {
    title: "JS Store",
    img: js_ecommerce,
    technologyUse: "Html, Css, JavaScript, Local storage",
    demoUrl: "https://dreamy-visvesvaraya-971156.netlify.app",
    githubUrl: "https://github.com/foysalkazi11/javaScript-ecommerce-site",
  },

  // {
  //   title: "MUI-Design",
  //   img: reactMui,
  //   technologyUse: "React, Material UI",
  //   demoUrl: "https://priceless-kare-1b24ef.netlify.app/",
  //   githubUrl: "https://github.com/foysalkazi11/react-material-mobile-design",
  // },
];

const Project = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [projectDis, setprojectDis] = useState({
    title: "",
    img: "",
    technologyUse: "",
    demoUrl: "",
    githubUrl: "",
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
            githubUrl: project.githubUrl,
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
