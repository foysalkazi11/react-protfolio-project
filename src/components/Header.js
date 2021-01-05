import React from "react";
import Typeds from "./Typed";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-info">
        <Typeds />
        <button>
          <Link to="#">Projects</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
