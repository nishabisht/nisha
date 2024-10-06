import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TestimonialCard from "./TestimonialCard";
import yellowNote from "../assets/img/yellownote.png";
import greenNote from "../assets/img/greenNote.png";
import pinkNote from "../assets/img/pinkNote.png";
import blueNote from "../assets/img/blueNote.png";
import StickyNote from "./StickyNote";
import Carousel from "react-bootstrap/Carousel";

// import "../assets/css/darkTheme.css";

const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      text: "This portfolio is outstanding! The design is clean and professional.",
      author: "Nisha Bisht",
      backgroundImage: yellowNote,
    },
    {
      text: "Amazing work! The attention to detail is impressive.",
      author: "Rohit Sharma",
      backgroundImage: greenNote,
    },
    {
      text: "Highly recommend! The creativity and skill are evident in every project.",
      author: "Akash",
      backgroundImage: pinkNote,
    },
    {
      text: "I love this portfolio! It's visually appealing and well-organized.",
      author: "Riya",
      backgroundImage: blueNote,
    },
  ];

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Check if the screen is mobile size
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="testimonials" id="testimonial">
      <Container>
        <Row className="my-2 py-2">
          <Col className="text-center">
            <h2 className="testimonial">Testimonials</h2>
            <p>Here are some kind words from our satisfied clients:</p>
          </Col>
        </Row>

        {/* Conditional rendering: Carousel for mobile, Grid for desktop */}
        {isMobile ? (
          <Row>
            <Col>
              <Carousel>
                {testimonials.map((testimonial, index) => (
                  <Carousel.Item key={index}>
                    <div className="d-flex justify-content-center">
                      <StickyNote
                        testimonial={testimonial.text}
                        author={testimonial.author}
                        backgroundImage={testimonial.backgroundImage}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        ) : (
          <Row className="my-2 py-2">
            {testimonials.map((testimonial, index) => (
              <Col
                key={index}
                xs={12}
                md={6}
                lg={3}
                className="mb-4 text-center d-flex justify-content-center"
              >
                <StickyNote
                  testimonial={testimonial.text}
                  author={testimonial.author}
                  backgroundImage={testimonial.backgroundImage}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Testimonial;