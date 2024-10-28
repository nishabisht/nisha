import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";
import Sicon1 from "../assets/img/nav-icon1.svg";
import Sicon2 from "../assets/img/nav-icon2.svg";
import Sicon3 from "../assets/img/naukri.svg";
import { ThemeContext } from "../components/ThemeContext";
import Banner from "./Banner";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // Track navbar toggle state
  const { theme, setTheme } = useContext(ThemeContext);

  const onUpdateActiveLink = (item) => {
    setActiveLink(item);
    setExpanded(false); // Collapse navbar when a link is clicked
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
    <>
      <Navbar
        expand="lg"
        className={`navbar-custom ${scrolled ? "scrolled" : ""}`}
        expanded={expanded} // Add this to control expand state
        onToggle={(isExpanded) => setExpanded(isExpanded)} // Detect when navbar is toggled
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="logo" alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
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
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "project"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("project")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text d-flex align-items-center flex-column flex-lg-row">
              <div className="social-icon d-flex mb-2 mb-lg-0">
                <a
                  href="https://www.linkedin.com/in/nisha-bisht/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Sicon1} alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/nishabisht"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Sicon2} alt="GitHub" />
                </a>
                <a
                  href="https://www.naukri.com/mnjuser/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Sicon3} alt="Instagram" />
                </a>
              </div>
              <button
                className="vvd mx-lg-3 mb-2 mb-lg-0"
                onClick={() => {
                  onUpdateActiveLink("connect");
                  window.location.href = "#connect";
                }}
              >
                <span>Let's Connect</span>
              </button>
              <button
                onClick={toggleTheme}
                className="vvd mx-lg-3 mb-2 mb-lg-0"
              >
                {theme === "dark" ? "Light Theme" : "Dark Theme"}
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Banner isNavExpanded={expanded} />
    </>
  );
}

export default NavBar;
