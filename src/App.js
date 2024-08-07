import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, CourseFeedback, Footer } from "./New.js";
import Card from "./Card.js";
import Course from "./Course.js";
import RegistrationForm from "./Register.js";
import Header from "./New.js";
import Main from "./Module.js";
import FeedbackPage1 from "./Student_Feedback.js";
import HeaderComponent from "./Header_Course.js";
import Admin from "./Admin.js"; // Import Admin component
import UserTable from "./UserTable.js"; // Import UserTable component
import StaticFeedbackReviews from "./StaticFeedbackReviews.js";
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
          <Route path="/module" element={<Main />} />
          <Route path="/Student_Feedback" element={<FeedbackPage1 />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
