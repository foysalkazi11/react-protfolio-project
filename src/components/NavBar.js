import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [showlink, setshowlink] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handelResiz = () => {
    setWindowWidth(window.innerWidth);

    if (windowWidth > 800) {
      return setshowlink(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handelResiz);
    return () => {
      window.removeEventListener("resize", handelResiz);
    };
    //eslint-disable-next-line
  }, []);

  const handleClick = () => {
    setshowlink(!showlink);
  };
  const menu = (
    <ul className="show-link">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/about-me">
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/skills">
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/projects">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/contract-me">
          Contract Me
        </NavLink>
      </li>
    </ul>
  );

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul className={`main-link`}>
            <li>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/about-me">
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/skills">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/contract-me">
                Contract Me
              </NavLink>
            </li>
          </ul>

          <ul className="mobile-menu">
            {showlink ? (
              <li className="menu-icon">
                <MdClose
                  color="f2f2f2"
                  fontSize="1.7rem"
                  onClick={handleClick}
                />
              </li>
            ) : (
              <li className="menu-icon">
                <FiMenu
                  color="f2f2f2"
                  fontSize="1.7rem"
                  onClick={handleClick}
                />
              </li>
            )}
          </ul>
        </div>
        {showlink && menu}
      </nav>
    </>
  );
};

export default NavBar;
