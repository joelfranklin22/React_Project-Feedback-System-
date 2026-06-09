import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./User.css";
// About Code
const AboutUs = () => {
  return (
    <Container className="about-us">
      <Row>
        <Col md={{ span: 0, offset: 0 }}>
          <h2 className="about ">About Us</h2>
          <p className="p1 text-justify">
            Welcome to Fluid Fusion, a premier feedback management company
            dedicated to helping organizations harness the power of feedback to
            drive improvement and success. We specialize in providing
            comprehensive feedback solutions that enable businesses to collect,
            analyze, and act on insights from their stakeholders, whether they
            are customers, employees, or training participants.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 0, offset: 0 }}>
          <h2 className="mission">Mission & Vision</h2>
          <ol className="mission-vision-list text-justify">
            <li>
              Our mission is to empower organizations with the tools and
              insights needed to foster a culture of continuous improvement.
            </li>
            <li>
              By offering robust feedback management systems, we aim to help our
              clients make informed decisions that enhance performance,
              satisfaction, and overall success.
            </li>
            <li>
              We envision a world where feedback is seamlessly integrated into
              the fabric of every organization, driving innovation and
              excellence.
            </li>
          </ol>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
