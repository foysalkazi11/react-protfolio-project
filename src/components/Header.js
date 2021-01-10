import React from "react";
import Typeds from "./Typed";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div id="home" className="header-container">
      <div className="header-info">
        <Typeds />
        <button>
          <Link smooth={true} spy={true} to="projects">
            Projects
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
