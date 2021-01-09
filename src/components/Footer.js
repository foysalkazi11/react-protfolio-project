import React from "react";
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
    <section className="wraper wraper-footer">
      <div className="section footer-container">
        <div className="info-container">
          <div className="footer-section office-info">
            <p>Home office</p>
            <a href="tel:+8801845630043">+8801845630043</a>
            <p>foysalkazi11@gmail.com</p>
          </div>
          <div className="line">
            <p></p>
          </div>
          <div className="footer-section sections-links">
            <div>
              <a href="#home">Home</a>
              <a href="#about-me">About-me</a>
              <a href="#skills">Skills</a>
            </div>
            <div>
              <a href="#project">Project</a>
              <a href="#contract">Contract</a>
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
