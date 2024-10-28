import React from "react";
import "../App.css"; // Include your CSS file
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useRef } from "react";
import toolIcon from "../assets/img/tool.svg";

const ToolsSection = () => {
  const businessTool = [
    { toolName: "Github", name: "GitHub" },
    { toolName: "NewRelic", name: "JavaScript" },
    { toolName: "Splunk", name: "Java" },
    { toolName: "Glassbox", name: "React" },
    { toolName: "Rancher", name: "Bootstrap" },
    { toolName: "Jenkin", name: "Spring Boot" },
    { toolName: "GLPI", name: "Spring Boot" },
    { toolName: "Jira", name: "Spring Boot" },
    { toolName: "Intellij", name: "Spring Boot" },
    { toolName: "Eclipse", name: "Spring Boot" },
    { toolName: "vsCode", name: "Spring Boot" },
    { toolName: "Postman", name: "Spring Boot" },
  ];
  const AITool = [
    { toolName: "personal Assistant", name: "Spring Boot" },
    { toolName: "Github Copilot", name: "Spring Boot" },
    { toolName: "ChatGpt", name: "Spring Boot" },
  ];
  const CommunicationTool = [
    { toolName: "Outlook", name: "Spring Boot" },
    { toolName: "MS Team", name: "Spring Boot" },
    { toolName: "Zoom", name: "Spring Boot" },
  ];

  return (
    <section className="tools" id="tools">
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h2>Tools Experience</h2>

            <h3>Business Tools</h3>
            <p>
              I have hands-on experience with a diverse range of tools and
              technologies across the full development stack.
            </p>
          </Col>
        </Row>
        <Row className="text-center justify-content-center">
          {businessTool.map((tool, index) => (
            <Col xs={6} sm={4} md={3} lg={2} className="mb-4" key={index}>
              <div className="tool-item">
                <img src={toolIcon} alt="tool icon" className="tool-icon" />
                <h5>{tool.toolName}</h5>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mb-4 text-center">
          <Col>
            <h3>AI Tools</h3>
            <p>
              AI tools empower businesses with intelligent automation, data
              insights, and predictive analytics for smarter decision-making.
            </p>
          </Col>
        </Row>
        <Row className="text-center justify-content-center">
          {AITool.map((tool, index) => (
            <Col xs={6} sm={4} md={3} lg={2} className="mb-4" key={index}>
              <div className="tool-item">
                <h5>{tool.toolName}</h5>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mb-4 text-center ">
          <Col>
            <h3>Communication Tools</h3>
            <p>
              Communication tools enable seamless collaboration, keeping teams
              connected and aligned across any distance.
            </p>
          </Col>
        </Row>
        <Row className="text-center justify-content-center">
          {CommunicationTool.map((tool, index) => (
            <Col xs={6} sm={4} md={3} lg={2} className="mb-4" key={index}>
              <div className="tool-item">
                <h5>{tool.toolName}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ToolsSection;
