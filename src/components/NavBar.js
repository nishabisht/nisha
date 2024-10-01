import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";
import Sicon1 from "../assets/img/nav-icon1.svg";
import Sicon2 from "../assets/img/nav-icon2.svg";
import Sicon3 from "../assets/img/nav-icon3.svg";
import { ThemeContext } from "../components/ThemeContext";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const onUpdateActiveLink = (item) => {
    setActiveLink(item);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} `}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav ms-3">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skill"
              className={
                activeLink === "skill" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skill")}
            >
              Skill
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("project")}
            >
              Project
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/nisha-bisht/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Sicon1} alt="" />
              </a>
              <a
                href="https://github.com/nishabisht"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Sicon2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/aishabisht2000/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Sicon3} alt="" />
              </a>
            </div>
            <button
              className={
                "vvd rounded" + activeLink === "connect"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("connect");
                window.location.href = "#connect";
              }}
            >
              <span>Let's Connect</span>
            </button>
            <button onClick={toggleTheme} className="btn btn-outline-light">
              {theme === "dark" ? "Light Theme" : "Dark Theme"}
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
