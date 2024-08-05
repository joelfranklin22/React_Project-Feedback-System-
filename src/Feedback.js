import React from "react";
import "./User.css"; // Import the CSS file
import Person1 from "./Image/Person-1.png";
import Person2 from "./Image/Person-2.png";
import Person3 from "./Image/Person-3.png";

const CourseFeedback = () => {
  const feedbacks = [
    {
      name: "Cassie",
      imgSrc: Person1,
      education: "UG in Computer Science",
      profession: "I'm Software Developer",
      feedback:
        "The course was exceptionally well-designed and greatly enhanced my knowledge in the subject area. Overall, I highly recommend this course for its comprehensive content.",
    },
    {
      name: "Christina",
      imgSrc: Person2,
      education: "UG in Computer Science",
      profession: "MBA in CyberSecurity",
      feedback:
        "The course was helpful in gaining knowledge and provided ample resources for learning. The module design was well-structured, making it suitable for beginners who wish to enroll.",
    },
    {
      name: "Carla",
      imgSrc: Person3,
      education: "UG in Computer Science",
      profession: "I'm Software Developer",
      feedback:
        "The course was extremely beneficial in enhancing my knowledge. It provided ample resources that facilitated effective learning. The module design was well-structured.",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Course Feedback</h2>
      <div className="row justify-content-center">
        {feedbacks.map((feedback, index) => (
          <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index}>
            <div className="card feedback-card text-center">
              <div className="card-body">
                <img
                  src={feedback.imgSrc}
                  alt={feedback.name}
                  className="img-fluid"
                />
                <h5 className="card-title mt-3">{feedback.name}</h5>
                <p className="card-text">
                  {feedback.education}
                  <br />
                  {feedback.profession}
                </p>
                <hr style={{ width: "100%" }} className="line" />
                <p className="content">{feedback.feedback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFeedback;
