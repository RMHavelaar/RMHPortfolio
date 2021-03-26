import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <a
                href="https://github.com/RMHavelaar/RMHPortfolio"
                target="_blank"
                rel="noreferrer"
              >
                This website was built using React + BootstrapJS. Click here for
                a link to the repo.
              </a>
            </div>
            <div className="d-flex">
              <p>Texas, United States of America</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+1(903) 471-1575</a>
            </div>
            <div className="d-flex">
              <a
                href="mailto: RMHavelaar@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                RMHavelaar@gmail.com
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contact</a>
              </div>
              <div className="col">
                <a className="footer-nav">Resume</a>
                <br />
                <a className="footer-nav">GitHub</a>
                <br />
                <a className="footer-nav">Linkedin</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"roberthavelaar.com"}
                quote={"FullStack Developer"}
                title={
                  "Check out this awesome software engineer I came across. If you need a website, bot, or game server he's your man."
                }
                hashtag={"#SoftwareEngineer"}
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"roberthavelaar.com"}
                quote={"FullStack Developer"}
                title={
                  "Check out this awesome software engineer I came across. If you need a website, bot, or game server he's your man."
                }
                hashtag="#programmer"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"roberthavelaar.com"}
                quote={"FullStack Developer"}
                title={
                  "Check out this awesome software engineer I came across. If you need a website, bot, or game server he's your man."
                }
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"roberthavelaar.com"}
                quote={"FullStack Developer"}
                summary="Check out this awesome Software Engineer I came across."
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Robert Havelaar | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
