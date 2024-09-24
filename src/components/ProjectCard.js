import React from "react";
import { Col } from "react-bootstrap";
import "../App.css";
import "../darkTheme.css";

export default function ProjectCard({ title, description, imgUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h1>{title}</h1>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}
