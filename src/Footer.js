import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./User.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3} className="footer-section">
            <h5 className="follow">FOLLOW US ON</h5>
            <ul className="list-unstyled social-icons">
              <li>
                <a href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">About Us</a>
              </li>
              <li>
                <a href="#!">Core Team</a>
              </li>
              <li>
                <a href="#!">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Career</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Hire from Us</a>
              </li>
              <li>
                <a href="#!">Apply as Mentor</a>
              </li>
              <li>
                <a href="#!">Work with us</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h5 className="contact_1">CONTACT US</h5>
            <p className="contact-1">Fluid Fusion Tech.</p>
            <p className="contact-2">Phone: 04362 221112, 221113</p>
            <p className="contact-3">Fax: 04362 221112</p>
            <p className="contact-4">Email: FluidFusion@business.com</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="foot">
            <p className="left">Copyright &copy; Fluid Fusion Tech.</p>
            <p className="right">
              Developed & Maintained by Joel <i className="fas fa-tools"></i>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
