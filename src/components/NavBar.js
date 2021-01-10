import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
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

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div
            className={`main-link-container ${
              showlink ? "display-link" : null
            }`}
          >
            <ul className={`main-link `}>
              <li>
                <Link
                  activeClass="active"
                  offset={-58}
                  spy={true}
                  to="home"
                  smooth={true}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  offset={-58}
                  spy={true}
                  to="aboutMe"
                  smooth={true}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  offset={-58}
                  spy={true}
                  to="skills"
                  smooth={true}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  offset={-58}
                  spy={true}
                  to="projects"
                  smooth={true}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  offset={-58}
                  spy={true}
                  to="contract"
                  smooth={true}
                >
                  Contract Me
                </Link>
              </li>
            </ul>
          </div>

          <ul className="mobile-menu">
            {showlink ? (
              <li className="menu-icon">
                <MdClose color="f2f2f2" size="2rem" onClick={handleClick} />
              </li>
            ) : (
              <li className="menu-icon">
                <FiMenu color="f2f2f2" size="2rem" onClick={handleClick} />
              </li>
            )}
          </ul>
        </div>
        {/* {showlink && menu} */}
      </nav>
    </>
  );
};

export default NavBar;
