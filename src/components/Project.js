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
      title: "React.dev Clone",
      describtion: "Design & development",
      imgUrl: projImg2,
    },
    {
      title: "Ecommerce Website",
      describtion: "Design & development",
      imgUrl: projImg3,
    },
    {
      title: "Ecom Pet Store",
      describtion: "Design & development",
      imgUrl: projImg1,
    },
    {
      title: "To Do App",
      describtion: "Design & development",
      imgUrl: projImg2,
    },
    {
      title: "E-Learning Website",
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
                  <Nav.Link eventKey="first">Springboot/React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Bootstrap</Nav.Link>
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
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
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
