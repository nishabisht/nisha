import React from "react";
import { Col } from "react-bootstrap";
import "../App.css";

export default function ProjectCard({ title, describtion, imgUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h1>{title}</h1>
          <span>{describtion}</span>
        </div>
      </div>
    </Col>
  );
}
