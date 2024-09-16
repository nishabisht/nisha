import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "../App.css";

export default function Project() {
  const projects = [
    {
      title: "My Portfolio",
      describtion: "Design & developement",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      describtion: "Design & development",
      imgUrl: projImg2,
    },
    {
      title: "Web Designer",
      describtion: "Design & development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      describtion: "Design & development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      describtion: "Design & development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      describtion: "Design & development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              In this tutorial, we build a personal portfolio website using
              React and Animate CSS. Follow along and share what you build in
              the comments!
            </p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="first">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <Col>
                      <div className="alignment">
                        A portfolio's meaning can be defined as a collection of
                        financial assets and<br></br> investment tools that are
                        held by an individual, a financial institution or an
                        investment firm.
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    <Col>
                      <div className="alignment">
                        A portfolio's meaning can be defined as a collection of
                        financial assets and<br></br> investment tools that are
                        held by an individual, a financial institution or an
                        investment firm.
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="backgoud" src={colorSharp2} />
    </section>
  );
}
