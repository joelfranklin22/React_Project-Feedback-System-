import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation functions
  const validateUsername = (value) => {
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    if (!value.trim()) return "Username is required";
    if (!usernameRegex.test(value))
      return "Username must be 3-20 characters long and contain only alphanumeric characters";
    return "";
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) return "Email is required";
    if (!emailRegex.test(value)) return "Email address is invalid";
    return "";
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!value.trim()) return "Password is required";
    if (!passwordRegex.test(value))
      return "Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character";
    return "";
  };

  const validateCourse = (value) => {
    if (!value.trim()) return "Course is required";
    return "";
  };

  // Handle input change and validate on-the-fly
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: validateUsername(value),
        }));
        break;
      case "email":
        setEmail(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: validateEmail(value),
        }));
        break;
      case "password":
        setPassword(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: validatePassword(value),
        }));
        break;
      case "course":
        setCourse(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          course: validateCourse(value),
        }));
        break;
      default:
        break;
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      username: validateUsername(username),
      email: validateEmail(email),
      password: validatePassword(password),
      course: validateCourse(course),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (!hasErrors) {
      setShowSuccess(true);
      setUsername("");
      setEmail("");
      setPassword("");
      setCourse("");
      setErrors({});
    }
  };

  // Handle form reset
  const handleReset = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setCourse("");
    setErrors({});
  };

  return (
    <Container>
      <div className="form-header text-center my-4">
        <h2>Register for the Course</h2>
      </div>
      <div
        className="form-container"
        style={{
          maxHeight: "600px",
          overflowY: "auto",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
          {showSuccess && (
            <Alert
              variant="success"
              onClose={() => setShowSuccess(false)}
              dismissible
            >
              Registration successful!
            </Alert>
          )}
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter username"
              value={username}
              onChange={handleInputChange}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={handleInputChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={handleInputChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formCourse">
            <Form.Label>Course</Form.Label>
            <Form.Control
              as="select"
              name="course"
              value={course}
              onChange={handleInputChange}
              isInvalid={!!errors.course}
            >
              <option value="">Select course</option>
              <option value="python-cli">
                Python CLI Application on Linux
              </option>

              {/* Add more courses as needed */}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.course}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
        <div className="form-buttons d-flex justify-content-between">
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Register
          </Button>
          <Button variant="secondary" type="button" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default RegistrationForm;
