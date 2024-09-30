import React from "react";
// import "../assets/css/darkTheme.css";

const StickyNote = ({ testimonial, author, backgroundImage }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="sticky-note" style={cardStyle}>
      <div className="test-card">
        <p className="testimonial-text">{testimonial}</p>
        <p className="testimonial-author">- {author}</p>
      </div>
    </div>
  );
};

export default StickyNote;
