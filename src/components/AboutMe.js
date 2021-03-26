import React from "react";
import author from "../images/me.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="Headshot" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello, I am Robert Havelaar, I joined the professional developer
            community in 2019. I started out using online courses to self teach
            which ignited my passion and led me to make a career and attend
            Kenzie Academy for a Full Stack Software Engineering Certificate. I
            thrived during my time at Kenzie, after my first quarter I quickly
            became a paid tutor and nominated to join the student committee
            where we created the culture and implemented many of the programs
            and activities that are active to this day.
            <br />
            In my previous life I was a fine dining chef culminating with being an Executive Souse Chef at a fine dining establishment on top of the Vail Ski Resort.  After 13 years in the industry it was time to move on to a career I could be more passionate about and would want to do for the rest of my life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
