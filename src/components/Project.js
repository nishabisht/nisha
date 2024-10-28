import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import ABC_bank from "../assets/img/project/ABC_bank.jpg";
import bmi_portal from "../assets/img/project/bmiCal.jpg";
import currency_coverter from "../assets/img/project/currency_converter.jpg";
import ecomShop from "../assets/img/project/ecomShop.jpg";
import handPan from "../assets/img/project/HandPan.jpg";
import React_clone from "../assets/img/project/react_clone.jpg";
import TrackVisibility from "react-on-screen";
import "animate.css";
import "../App.css";

const Project = () => {
  const spring_react = [
    {
      title: "Daily Aid App",
      description:
        "The Daily Aid App is a Spring Boot application designed to manage daily amenities services with JWT authentication.",
      imgUrl: projImg1,
      link: "https://github.com/nishabisht/daily-aid-springboot",
      gitLink: "https://github.com/nishabisht/daily-aid-springboot",
    },
    {
      title: "Pet Store Backend",
      description:
        "The Ecom Pet Store is an online platform for purchasing pet products, accessories, and supplies, offering a wide variety of items for different pets.",
      imgUrl: projImg1,
      link: "https://github.com/nishabisht/peer-pet_springboot",
      gitLink: "https://github.com/nishabisht/peer-pet_springboot",
    },
    {
      title: "bookNest Backend",
      description:
        "The BookNest app is a digital library platform designed to help users organize, track, and manage their books and book-related transactions.",
      imgUrl: projImg2,
      link: "https://github.com/nishabisht/book-nest-springboot",
      gitLink: "https://github.com/nishabisht/book-nest-springboot",
    },
  ];
  const react = [
    {
      title: "React.dev Clone",
      description:
        "A clone of the React.dev website, demonstrating React skills.",
      imgUrl: React_clone,
      link: "https://nishabisht.github.io/react_site_clone/",
      gitLink: "https://github.com/nishabisht/react_site_clone",
    },
    {
      title: "Ecom Website",
      description: "An online store for various products, built with React.",
      imgUrl: ecomShop,
      link: "https://nishabisht.github.io/digital_shop_react/",
      gitLink: "https://github.com/nishabisht/digital_shop_react",
    },
    {
      title: "Pet Shop",
      description: "A website for creating and customizing greeting cards.",
      imgUrl: projImg1,
      link: "",
      gitLink: "https://github.com/nishabisht/peer-pet_react",
    },
    {
      title: "BMI Calculator",
      description: "A tool for calculating Body Mass Index, built with React.",
      imgUrl: bmi_portal,
      link: " https://nishabisht.github.io/bmi-calculator/",
      gitLink: "https://github.com/nishabisht/bmi-calculator",
    },
    {
      title: "Currency Converter",
      description: "A web app for converting currencies, built with React.",
      imgUrl: currency_coverter,
      link: " https://nishabisht.github.io/currency_converter_react/",
      gitLink: "https://github.com/nishabisht/currency_converter_react",
    },
    {
      title: "ABC Bank Portal",
      description: "A website for digital netbanking, built with React.",
      imgUrl: ABC_bank,
      link: "  https://nishabisht.github.io/abc_bank_ui/",
      gitLink: "https://github.com/nishabisht/abc_bank_ui",
    },
  ];
  const bootstrap = [
    {
      title: "HandPan UI",
      description:
        "A user interface for a HandPan musical instrument application.",
      imgUrl: handPan,
      link: " https://nishabisht.github.io/handPan_bootstrap/",
      gitLink: "https://github.com/nishabisht/handPan_bootstrap",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
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
                  <Tab.Container id="projects-tab" defaultActiveKey="first">
                    <Nav variant="pills" className="justify-content-center">
                      <Nav.Item>
                        <Nav.Link eventKey="first">React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Springboot</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Bootstrap</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="second">
                        <Row className="animate__animated animate__fadeInUp">
                          {spring_react.map((project, index) => (
                            <Col
                              key={index}
                              xs={12}
                              md={6}
                              lg={4}
                              className="mb-4"
                            >
                              <ProjectCard key={index} {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="first">
                        <Row className="animate__animated animate__fadeInUp">
                          {react.map((project, index) => (
                            <Col
                              key={index}
                              xs={12}
                              md={6}
                              lg={4}
                              className="mb-4"
                            >
                              <ProjectCard key={index} {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="animate__animated animate__fadeInUp">
                          {bootstrap.map((project, index) => (
                            <Col
                              key={index}
                              xs={12}
                              md={6}
                              lg={4}
                              className="mb-4"
                            >
                              <ProjectCard key={index} {...project} />
                            </Col>
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
    </section>
  );
};

export default Project;
