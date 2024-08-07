import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown, faMeh, faSmile } from "@fortawesome/free-solid-svg-icons";

const feedbackData = [
  {
    username: "JohnDoe",
    email: "johndoe@example.com",
    responses: ["Best", "Better", "Worst", "Best", "Better"],
    detailedResponses: [
      "1.Did the training meet your expectations?",
      "2.What did you like the most about the training?",
      "3.How would you rate the overall quality of this training session?",
      "4.Was the training program interactive and engaging?",
      "5.Was the training at a comfortable pace? Was it too fast/slow?",
    ],
  },
  {
    username: "JaneSmith",
    email: "janesmith@example.com",
    responses: ["Better", "Best", "Better", "Worst", "Best"],
    detailedResponses: [
      "1.Did the training meet your expectations?",
      "2.What did you like the most about the training?",
      "3.How would you rate the overall quality of this training session?",
      "4.Was the training program interactive and engaging?",
      "5.Was the training at a comfortable pace? Was it too fast/slow?",
    ],
  },
  // Add more sample data as needed
];

const getIcon = (response) => {
  switch (response) {
    case "Worst":
      return <FontAwesomeIcon icon={faFrown} style={{ color: "red" }} />;
    case "Better":
      return <FontAwesomeIcon icon={faMeh} style={{ color: "orange" }} />;
    case "Best":
      return <FontAwesomeIcon icon={faSmile} style={{ color: "green" }} />;
    default:
      return null;
  }
};

const StaticFeedbackReviews = () => {
  const [open, setOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const handleClickOpen = (feedback) => {
    setSelectedFeedback(feedback);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFeedback(null);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedbackData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleClickOpen(row)}
                  >
                    View Feedback
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedFeedback && (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>Feedback Details</DialogTitle>
          <DialogContent>
            <Typography variant="h6">
              Username: {selectedFeedback.username}
            </Typography>
            <Typography variant="h6">
              Email: {selectedFeedback.email}
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Question 1</TableCell>
                  <TableCell>Question 2</TableCell>
                  <TableCell>Question 3</TableCell>
                  <TableCell>Question 4</TableCell>
                  <TableCell>Question 5</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  {selectedFeedback.responses.map((response, idx) => (
                    <TableCell key={idx}>{getIcon(response)}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
            <Typography variant="h6" style={{ marginTop: "20px" }}>
             Feedback Question:
            </Typography>
            <Table>
              <TableBody>
                {selectedFeedback.detailedResponses.map((response, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{response}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default StaticFeedbackReviews;
