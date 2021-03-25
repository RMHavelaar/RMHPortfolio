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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
            ipsum vel justo tempus ultrices et nec turpis. Vivamus consectetur
            molestie mattis. Nulla tristique vehicula nunc a pellentesque.
            Vestibulum vel magna et lacus mollis varius sed vel ante. Donec
            vitae mi diam. Fusce sed mi eget felis semper feugiat. Morbi quam
            neque, faucibus eu magna sit amet, interdum luctus nunc. Phasellus
            ut dapibus ex. Maecenas bibendum et orci eu porta. Vivamus nunc ex,
            blandit sed maximus non, aliquam cursus lacus. Maecenas fermentum,
            libero eget sollicitudin fringilla, sem nulla euismod sem, id
            vestibulum lacus dolor ut urna. Ut posuere rhoncus risus. Donec
            pretium condimentum tempor. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Quisque mauris mi, viverra suscipit
            gravida ut, ultricies sed massa. Maecenas id lacus quis eros
            venenatis faucibus a ut dolor. Ut eu diam nibh. Aenean in tincidunt
            nibh. Aenean tristique orci diam, non tincidunt eros viverra vitae.
            Vestibulum non est id risus maximus imperdiet in eu massa.
            Pellentesque a est mollis dui euismod tempor ultrices id lorem.
            Donec ac elit imperdiet, vulputate erat sit amet, tempus neque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
