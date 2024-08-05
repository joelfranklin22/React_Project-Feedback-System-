import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Modal, Button } from "react-bootstrap"; // Import Modal and Button from react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Image/Logo-white.png";
import Python_1 from "./Image/PythonCvr.webp";
import timerIcon from "./Image/timer.svg";
import currencyIcon from "./Image/currency.svg";
import mediaIcon from "./Image/media.svg";
import icon_py from "./Image/icon-py.png";
import cliIcon from "./Image/cli.png";
import RegistrationForm from "./Register"; // Import RegistrationForm component
import "./Course.css";
const Header = () => {
  const [showModal, setShowModal] = useState(false); // State for managing modal visibility

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <header className="header-container">
        <div className="nav bg-dark text-white p-3">
          <div className="logo">
            <img src={logo} alt="Logo" width="60" height="50" />
            <span className="company ml-2">Fluid Fusion</span>
          </div>
          <ul className="right d-flex align-items-center list-unstyled m-0">
            <li className="feedback mx-2">
              <a href="user_Homepage.html" className="text-white">
                Home
              </a>
            </li>
            <li className="register mx-2">
              <a href="Register.html" className="text-white">
                About
              </a>
            </li>
            <li className="contact mx-2">
              <a href="#call-contact" className="text-white">
                Course
              </a>
            </li>
            <li className="contact mx-2">
              <a href="#call-contact" className="text-white">
                Contact
              </a>
            </li>
            <li className="home mx-2">
              <a href="user_Homepage.html" className="text-white">
                Register
              </a>
            </li>
          </ul>
        </div>
        <div className="header-content">
          <div className="back-img">
            <img src={Python_1} alt="Background" className="img-fluid" />
          </div>
        </div>
      </header>

      <main>
        <div className="registration text-white p-4 rounded">
          <h2 className="topic">PYTHON CLI APPLICATION ON LINUX</h2>
          <p className="topic-abt">
            This course is designed to teach students how to build command-line
            interfaces using Python...
          </p>
          <div className="d-flex align-items-center my-3 time-1">
            <img src={timerIcon} alt="Timer" className="mr-2" width="40" />
            <div>
              <div className="day font-weight-bold">Total Duration</div>
              <div className="time">10 Days</div>
            </div>
          </div>
          <div className="d-flex align-items-center my-3 currency-1">
            <img
              src={currencyIcon}
              alt="Currency"
              className="mr-2"
              width="40"
            />
            <div>
              <div className="old-price font-weight-bold">
                Price <del>19,000</del>
              </div>
              <div className="new-price">10,000</div>
            </div>
          </div>
          <div className="d-flex align-items-center my-3 media">
            <img src={mediaIcon} alt="Media" className="mr-2" width="40" />
            <div>
              <div className="media-1 font-weight-bold">Format</div>
              <div className="media-2">Recorded</div>
            </div>
          </div>
          <Button className="btn enroll mt-3" onClick={handleShow}>
            Enroll Now
          </Button>
        </div>
      </main>

      <section className="course-need p-4">
        <h2 className="text-dark h2">
          What Are The Topics Covered By This Course?
        </h2>
        <ul className="list-unstyled text-dark my-4">
          <li>Anatomy of Linux CLI...</li>
          <li>Basic Linux Concepts...</li>
          <li>Getting started with Python CLI...</li>
          <li>Create Mediainfo Converter tool Part 1...</li>
          <li>Shared Memory and Threading...</li>
        </ul>
      </section>

      <section className="things py-4 bg-white skills">
        <h2 className="text-dark text-center mb-4 head">
          What are the Things you Master from Course?
        </h2>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="course-details-1 text-center text-dark p-3 border border-yellow">
            <img
              src={icon_py}
              alt="Python"
              width="70"
              height="70"
              className="mb-2"
            />
            <div>Python</div>
          </div>
          <div className="course-details-2 text-center text-dark p-3 border border-yellow ml-4">
            <img
              src={cliIcon}
              alt="Linux"
              width="70"
              height="70"
              className="mb-2"
            />
            <div>Linux</div>
          </div>
        </div>
      </section>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegistrationForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
