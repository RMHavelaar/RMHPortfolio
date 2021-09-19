import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import kwitterThumbnails from "../images/avatars/kwitter_thumbnail.png";
import todoAppThumbnail from "../images/avatars/Todo_app_thumbnail.png";
import avatar3 from "../images/avatars/avatar-3.png";
import twitterBot from "../images/avatars/twitterBotThumbnail.png";
import tohThumbnail from "../images/avatars/TOHThumbnail.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={true}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={kwitterThumbnails} alt="John Doe 1" />
        <div className="myCarousel">
          <h3>Kwitter</h3>
          <p>A basic Twitter clone in React.</p>
          <p>
            This project displays the functionality of Twitter like application.
            I have plans to return to this project and style it.
          </p>
          <a href="#" target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <br />
          <a href="#" target="_blank" rel="noreferrer">
            GitHub Repository
          </a>
        </div>
      </>
      <>
        <img src={todoAppThumbnail} alt="Django Todo App Thumbnail" />
        <div className="myCarousel">
          <h3>Django Todo Application</h3>
          <p>
            This project was made to demonstrate the functionality of a custom
            Todo Application.
          </p>
          <a href="#" target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <br />
          <a href="#" target="_blank" rel="noreferrer">
            GitHub Repository
          </a>
        </div>
      </>
      {/* <>
        <img src={avatar3} alt="John Doe 3" />
        <div className="myCarousel">
          <h3>C&C Top Knotch SPAW</h3>
          <p>
            This is an active website for an independent groomer that also owns
            a boarding center. This contract was made with Wordpress to give the
            client easy access to the website's backend.
          </p>
        </div>
      </> */}
      <>
        <img src={tohThumbnail} alt="Tower of Hanoi Game" />
        <div className="myCarousel">
          <h3>Tower of Hanoi</h3>
          <p>This was one of my very early projects using vanilla</p>
          <a href="#" target="_blank" rel="noreferrer">
            GitHub Repository
          </a>
        </div>
      </>
      <>
        <img src={twitterBot} alt="Tower of Hanoi" />
        <div className="myCarousel">
          <h3>Twitter Bot & Web Scrapper</h3>
          <p>
            This is an example of an SMM Twitter bot. That will repost certain
            hashtags.
          </p>
          <a href="#" target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <br />
          <a href="#" target="_blank" rel="noreferrer">
            GitHub Repository
          </a>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
