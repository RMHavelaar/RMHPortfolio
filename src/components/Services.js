import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>
If you have a brand, business, or just want the world to know about your cats.  I will help you create a web presence for the potentially millions of consumers on the internet.
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
                <li>Firebase</li>
                <li>Ecommerce</li>
                <li>SQL Database's</li>
                <li>Social Media Bots</li>
                <li>Raspberry Pi Applications</li>
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faFacebookF}
                  size="2x"
                />
              </div>

              <h3>Social Media Ads</h3>
              <p>
                Lets face it we love social media and we all see the ads as we
                are scrolling through our feeds. Make your business stand out
                with your own custom ad.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
              </div>
              <h3>Google Ads</h3>
              <p>
                A Google search is where most people start their hunt for a new
                business or brand. Make the most of it by having a custom ad
                attached to your Google search results.
              </p>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
