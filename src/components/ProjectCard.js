import React from "react";
import { Col } from "react-bootstrap";
import "../App.css";

// import "../assets/css/darkTheme.css";

export default function ProjectCard({
  title,
  description,
  imgUrl,
  link,
  gitLink,
}) {
  return (
    <Col className="mt-3 d-flex justify-content-center">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} className="project-img rounded" />
        <div className="proj-txtx text-center">
          <div className="d-inline-flex">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="fuild-image mx-2" id="live"></div>
            </a>
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
              <div className="fuild-image mx-2" id="github"></div>
            </a>
          </div>

          <h3>{title}</h3>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}
