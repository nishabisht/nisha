import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
// import "../assets/css/darkTheme.css";

export default function Banner({ isNavExpanded }) {
  const [toRotate, setToRotate] = useState([
    "Software Engineer",
    "FullStack Developer",
    "Support Engineer",
  ]);
  const [loopNum, setLoopNum] = useState(0);
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(true); // Controls visibility

  const wordDisplayTime = 2000; // Time to keep the word visible (2 seconds)
  const hideDuration = 500; // Time during which the word is hidden (0.5 seconds)

  useEffect(() => {
    const rotateWords = () => {
      setIsVisible(false); // Start by hiding the text
      setTimeout(() => {
        setLoopNum((prevLoopNum) => (prevLoopNum + 1) % toRotate.length); // Move to the next word
        setText(toRotate[loopNum]);
        setIsVisible(true); // Show the new word
      }, hideDuration); // Hide for a short period before showing the next word
    };

    const interval = setInterval(rotateWords, wordDisplayTime + hideDuration);

    return () => clearInterval(interval); // Clean up on component unmount
  }, [loopNum, toRotate]);

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
              <span className={`wrap ${isVisible ? "fade-in" : "fade-out"}`}>
                {text}
              </span>
            </h1>
            <p className="description">
              Software engineer with 2 years of experience in software
              engineering and production support. Proficient in developing and
              troubleshooting Java applications, with a strong background in
              computer science. Committed to delivering high-quality software
              solutions through technical expertise and innovative
              problem-solving.
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
