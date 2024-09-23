import React from "react";
import "../darkTheme.css";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card m-5 p-2">
      <div className="test-card my-5">
        <p className="testimonial-text">{testimonial.text}</p>
        <p className="testimonial-author">- {testimonial.author}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
