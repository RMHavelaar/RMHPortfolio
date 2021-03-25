import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <canvas></canvas>
        <h1>iot development and website promotion</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Development",
            "Internet of Things Development",
            "Unity Engine 3D Game Development",
            "Social Media Marketing Ads",
            "Google Ads",
            "Tutoring",
          ]}
          typeSpeed={60}
          backSpeed={100}
          loop
        />
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
