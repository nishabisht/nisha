import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "../App.css";
import "../darkTheme.css";

const Project = () => {
  const spring_react = [
    {
      title: "Daily Aid App",
      description:
        "The Daily Aid App is a Spring Boot application designed to manage daily amenities services, with user authentication and role-based access controls (e.g., user, admin).",
      imgUrl: projImg1,
    },
    {
      title: "Ecom Pet Store",
      description:
        "The Ecom Pet Store is an online platform for purchasing pet products, accessories, and supplies, offering a wide variety of items for different pets.",
      imgUrl: projImg1,
    },
    {
      title: "To Do App",
      description:
        "The To Do App is a task management application designed to help users organize, track, and prioritize their daily tasks and activities.",
      imgUrl: projImg2,
    },
    {
      title: "E-Learning Website",
      description:
        "An online platform for educational content and courses, designed for interactive learning.",
      imgUrl: projImg3,
    },
  ];
  const react = [
    {
      title: "Portfolio",
      description:
        "A personal portfolio website showcasing projects and skills.",
      imgUrl: projImg1,
    },
    {
      title: "React.dev Clone",
      description:
        "A clone of the React.dev website, demonstrating React skills.",
      imgUrl: projImg2,
    },
    {
      title: "Ecommerce Website",
      description: "An online store for various products, built with React.",
      imgUrl: projImg3,
    },
    {
      title: "Custom Card Website",
      description: "A website for creating and customizing greeting cards.",
      imgUrl: projImg1,
    },
    {
      title: "BMI Calculator",
      description: "A tool for calculating Body Mass Index, built with React.",
      imgUrl: projImg2,
    },
    {
      title: "Currency Converter",
      description: "A web app for converting currencies, built with React.",
      imgUrl: projImg3,
    },
  ];
  const bootstrap = [
    {
      title: "HandPan UI",
      description:
        "A user interface for a HandPan musical instrument application.",
      imgUrl: projImg1,
    },
    {
      title: "React.dev Clone",
      description:
        "A clone of the React.dev website, demonstrating Bootstrap integration.",
      imgUrl: projImg2,
    },
    {
      title: "Ecommerce Website",
      description:
        "An online store for various products, built with Bootstrap.",
      imgUrl: projImg3,
    },
    {
      title: "Ecom Pet Store",
      description:
        "An online platform for purchasing pet products, built with Bootstrap.",
      imgUrl: projImg1,
    },
    {
      title: "To Do App",
      description: "A task management application, built with Bootstrap.",
      imgUrl: projImg2,
    },
    {
      title: "E-Learning Website",
      description:
        "An online platform for educational content and courses, built with Bootstrap.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Welcome to my project portfolio! Here, you'll find a
                    collection of projects that showcase my skills and
                    experience in web development. Each project highlights
                    different aspects of my expertise, from front-end
                    development with React to full-stack applications using
                    Spring Boot.
                  </p>
                  <Tab.Container
                    id="projects-tab my-2"
                    defaultActiveKey="first"
                  >
                    <Nav variant="pills" defaultActiveKey="first">
                      <Nav.Item>
                        <Nav.Link eventKey="first">React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Springboot/React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Bootstrap</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {spring_react.map((spring_react, index) => (
                            <ProjectCard key={index} {...spring_react} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {react.map((react, index) => (
                            <ProjectCard key={index} {...react} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {bootstrap.map((bootstrap, index) => (
                            <ProjectCard key={index} {...bootstrap} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};

export default Project;
