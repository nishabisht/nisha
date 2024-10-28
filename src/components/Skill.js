import React from "react";
import "../App.css";
// import "../assets/css/darkTheme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Springboot from "../assets/img/springboot.svg";
import react from "../assets/img/react.png";
import java from "../assets/img/java.png";
import bootstrap from "../assets/img/bootstrap.png";
import github from "../assets/img/github.png";
import javascript from "../assets/img/javascript.png";

export default function Skill() {
  const skills = [
    { img: java, name: "Core/Advance Java" },
    { img: github, name: "GitHub" },
    { img: javascript, name: "JavaScript" },
    { img: react, name: "React" },
    { img: bootstrap, name: "Bootstrap" },
    { img: Springboot, name: "Spring Boot" },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
  };

  return (
    <section className="skill" id="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                A showcase of my expertise, from front-end development with
                React and CSS to back-end work with Java and Spring Boot.
                Explore and share your thoughts!
              </p>

              {/* Carousel for Tablet and Desktop */}
              <div className="carousel-wrapper">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  {skills.map((skill, index) => (
                    <div className="item" key={index}>
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="skill-img"
                      />
                      <h5>{skill.name}</h5>
                    </div>
                  ))}
                </Carousel>
              </div>

              {/* Grid for Mobile */}
              <div className="grid-wrapper">
                <Row>
                  {skills.map((skill, index) => (
                    <Col xs={6} className="skill-grid-item" key={index}>
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="skill-img"
                      />
                      <h5>{skill.name}</h5>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
