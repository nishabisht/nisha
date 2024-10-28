import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import rotateText from "../TextRotation.js"; // Updated import

export default function Banner({ isNavExpanded }) {
  // Integrating the animation after the component has mounted
  useEffect(() => {
    rotateText(); // Call the rotateText function from TextRotation.js
  }, []);

  return (
    <section
      className={`banner ${isNavExpanded ? "nav-expanded" : ""}`}
      id="home"
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <span className="tagline">Welcome to My Creative Space</span>
            <h1>{"Hi! I'm Nisha Bisht"}</h1>
            <h1>
              <span className="rotating-text">
                <span>
                  <span className="word gredient-first">
                    FullStack Developer.
                  </span>
                  <span className="word gredient-second">
                    Support Engineer.
                  </span>
                  <span className="word gredient-third">
                    Software Engineer.
                  </span>
                  <span className="word gredient-first">
                    Backend Developer.
                  </span>
                  <span className="word gredient-second">
                    Application Support Engineer.
                  </span>
                </span>
              </span>
            </h1>

            {/* Rotating text section for words animation */}

            <p className="description">
              I’m a passionate Software Engineer focused on building
              high-performance, scalable applications. With expertise in
              problem-solving and a commitment to continuous learning, I thrive
              on delivering innovative solutions that drive business success.
            </p>
            <button
              className="contact-btn"
              onClick={() => {
                window.location.href = "#connect";
              }}
            >
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <img src={headerImg} className="header-img" alt="header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
