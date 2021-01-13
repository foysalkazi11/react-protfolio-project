import React from "react";
import { Link } from "react-scroll";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

const Footer = () => {
  return (
    <section id="footer" className="wraper wraper-footer">
      <div className="section footer-container">
        <div className="info-container">
          <div className="footer-section office-info">
            <a href="tel:+8801845630043">+8801845630043</a>
            <p>foysalkazi11@gmail.com</p>
          </div>
          <div className="line">
            <p></p>
          </div>
          <div className="footer-section sections-links">
            <div>
              <Link offset={-58} to="home" smooth={true}>
                Home
              </Link>

              <Link offset={-58} to="aboutMe" smooth={true}>
                About Me
              </Link>

              <Link offset={-58} to="skills" smooth={true}>
                Skills
              </Link>
            </div>
            <div>
              <Link offset={-58} to="projects" smooth={true}>
                Projects
              </Link>

              <Link offset={-58} to="contract" smooth={true}>
                Contract Me
              </Link>
            </div>
          </div>
          <div className="line">
            <p></p>
          </div>
          <div className="footer-section social-icon">
            <LinkedinShareButton
              url={"https://www.linkedin.com/in/mdfoysalkazi11/"}
              title={"FullStack JavaScript Depeloper"}
              hashtag="#javaScript"
            >
              <LinkedinIcon size={36} round={true} className="icon" />
            </LinkedinShareButton>
            <FacebookShareButton
              url={"https://web.facebook.com/foysal.kazi.54/"}
              quote={"FullStack JavaScript Depeloper"}
              hashtag="#javaScript"
            >
              <FacebookIcon size={36} round={true} className="icon" />
            </FacebookShareButton>
            <TwitterShareButton
              url={"https://web.facebook.com/foysal.kazi.54/"}
              quote={"FullStack JavaScript Depeloper"}
              hashtag="#javaScript"
            >
              <TwitterIcon size={36} round={true} className="icon" />
            </TwitterShareButton>
          </div>
        </div>
        <p className="copy-right">
          Copyright&copy; {new Date().getFullYear()}&nbsp;{" "}
        </p>
      </div>
    </section>
  );
};

export default Footer;
