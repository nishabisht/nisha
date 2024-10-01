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
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                A showcase of my expertise, from front-end development with
                React and CSS to back-end work with Java and Spring Boot.
                Explore and share your thoughts!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img
                    src={java}
                    alt="Core/Advance Java"
                    className="skill-img"
                  />
                  <h5>Core/Advance Java</h5>
                </div>
                <div className="item">
                  <img src={github} alt="GitHub" className="skill-img" />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <img
                    src={javascript}
                    alt="JavaScript"
                    className="skill-img"
                  />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="React" className="skill-img" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Node.js" className="skill-img" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img
                    src={Springboot}
                    alt="Spring Boot"
                    className="skill-img"
                  />
                  <h5>Spring Boot</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
