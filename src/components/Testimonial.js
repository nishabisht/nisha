import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonials = [
    {
      text: "I love this portfolio!",
      author: "John Doe",
    },
    {
      text: "I love this portfolio!",
      author: "John Doe",
    },
  ];

  return (
    <section className="testimonial" id="testimonial">
      <Container>
        <Row>
          <Col>
            <h2>Testimonials</h2>
            <p>This is a testimonial component.</p>

            <div className="row">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
