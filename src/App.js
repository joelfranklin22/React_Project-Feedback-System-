import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, CourseFeedback, Footer } from "./New.js"; 
import Card from "./Card.js";
import Course from "./Course.js";
import RegistrationForm from "./Register.js";
import Header from "./New.js";
function HomePage() {
  return (
    <div>
      <Header />
      <AboutUs />
      <CourseFeedback />
      <Card />
    </div>
  );
}

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:courseId" element={<Course />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
      <Footer />
      </>
  );
}

export default App;
