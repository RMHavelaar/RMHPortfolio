import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials">
      <h1>current and past projects</h1>

      <div className="container">
        <div className="testimonials-content">
          <TestimonialsCarousel />
        </div>
        <h6>
          *note some of the projects are strictly for displaying functionality
          and not styling*
        </h6>
      </div>
    </div>
  );
};

export default Testimonials;
