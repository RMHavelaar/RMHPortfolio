import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faFileCode,
  faTerminal,
  faUserFriends,
  faLaptopCode,
  faLanguage,
  faRobot,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">freelance services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>
                If you have a brand, business, or just want the world to know
                about your cats. I will help you create a web presence for the
                potentially millions of consumers on the internet.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>

              <h3>IOT Development</h3>
              <p>
                Wiki Pages
                <br />
                Database's
                <br />
                Ecommerce
                <br />
                Raspberry Pi Applications
                <br />
                Custom Scripts and Software
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faRobot} size="2x" />
              </div>
              <h3>Bots</h3>
              <p>
                SMM
                <br />
                Discord
                <br />
                Web Scrapers
                <br />
                Data Collection
                <br />
                Twitter, Instagram, and Linkedin
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGamepad} size="2x" />
              </div>
              <h3>Custom Game Servers</h3>
              <p>
                I will develop your game server and get it hosted on the
                platform of your choice. (Ark, Conan Exiles, 7 Days to die,
                Minecraft ect...)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
