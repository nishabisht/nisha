import React from "react";
import { Col } from "react-bootstrap";
import "../App.css";
// import "../assets/css/darkTheme.css";

export default function ProjectCard({ title, description, imgUrl, link }) {
  return (
    <Col className="mt-3 d-flex justify-content-center">
      <div className="proj-imgbx">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} alt={title} className="project-img rounded" />
        </a>
        <div className="proj-txtx text-center">
          <h1>{title}</h1>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}
