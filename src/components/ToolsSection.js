import React from "react";
import "../App.css"; // Include your CSS file
import { Container, Row, Col } from "react-bootstrap";
import toolIcon from "../assets/img/tool.svg";

const ToolsSection = () => {
  const businessTool = [
    {
      toolName: "GitHub",
      shortDescription: "Organize and manage code repositories",
    },
    {
      toolName: "New Relic",
      shortDescription: "Monitor application performance and health",
    },
    {
      toolName: "Splunk",
      shortDescription: "Track and analyze application logs",
    },
    {
      toolName: "Glassbox",
      shortDescription: "Record and analyze user sessions",
    },
    {
      toolName: "Rancher",
      shortDescription: "Manage and deploy Kubernetes clusters",
    },
    {
      toolName: "Jenkins",
      shortDescription: "Automate builds and CI/CD pipelines",
    },
    {
      toolName: "GLPI",
      shortDescription: "Ticketing and asset management tool",
    },
    {
      toolName: "Jira",
      shortDescription: "Project management and sprint tracking",
    },
    {
      toolName: "IntelliJ",
      shortDescription: "Java development IDE, ideal for Spring Boot",
    },
    {
      toolName: "Eclipse",
      shortDescription: "Java IDE for application development",
    },
    {
      toolName: "VS Code",
      shortDescription: "Lightweight, versatile code editor",
    },
    {
      toolName: "Postman",
      shortDescription: "API development and testing tool",
    },
  ];

  const AITool = [
    {
      toolName: "Personal Assistant",
      shortDescription: "AI-based virtual assistant",
    },
    {
      toolName: "GitHub Copilot",
      shortDescription: "AI-powered coding assistant",
    },
    { toolName: "ChatGPT", shortDescription: "Conversational AI model" },
  ];

  const CommunicationTool = [
    { toolName: "Outlook", shortDescription: "Microsoft email client" },
    {
      toolName: "MS Teams",
      shortDescription: "Microsoft chat and collaboration platform",
    },
    {
      toolName: "Zoom",
      shortDescription: "Video conferencing and meeting platform",
    },
    {
      toolName: "OpsGenie",
      shortDescription: "Incident alert and on-call management tool",
    },
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
                <h5 data-toggle="modal" data-target="#exampleModal">
                  {tool.toolName}
                </h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ToolsSection;
