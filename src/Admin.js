import React from "react";
import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home, Feedback, School, ExitToApp } from "@mui/icons-material"; // Import icons

const drawerWidth = 240;
const appBarHeight = 60; // Set the desired height for the AppBar

const Admin = () => {
  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate();

  return (
    <div
      style={{ display: "flex", minHeight: "73vh", flexDirection: "column" }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{
          zIndex: 1201,
          height: appBarHeight,
          backgroundColor: "#1e1e1e", // Dark background color for the AppBar
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            maxHeight: "575px", // Max height for the Drawer
            overflowY: "auto", // Ensure overflow is handled if content exceeds maxHeight
            backgroundColor: "#333", // Dark background color for the Drawer
            color: "#fff", // Light text color for contrast
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button onClick={() => navigate("/admin/registered-users")}>
            <Home sx={{ mr: 2 }} /> {/* Icon for Registered Users */}
            <ListItemText primary="Registered Users" />
          </ListItem>
          <ListItem button onClick={() => navigate("/admin")}>
            <Feedback sx={{ mr: 2 }} /> {/* Icon for Feedback Reviews */}
            <ListItemText primary="Feedback Reviews" />
          </ListItem>
          <ListItem button onClick={() => navigate("/admin")}>
            <School sx={{ mr: 2 }} /> {/* Icon for Course Enrolled */}
            <ListItemText primary="Course Enrolled" />
          </ListItem>
          <ListItem button onClick={() => navigate("/")}>
            <ExitToApp sx={{ mr: 2 }} /> {/* Icon for Logout */}
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <main style={{ flexGrow: 1, padding: "24px", marginLeft: drawerWidth }}>
        <Toolbar />
        <div>
          <h2>Registered Users</h2>
          <TableContainer component={Paper} style={{ marginBottom: "16px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Course</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>JoelFranklin C</TableCell>
                  <TableCell>joeljeyam22@gmail.com</TableCell>
                  <TableCell>LAHTP ADVANCE</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>JoelFranklin C</TableCell>
                  <TableCell>joeljeyam22@gmail.com</TableCell>
                  <TableCell>LAHTP ADVANCE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>PYTHON CLI APPLICATION ON LINUX</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              mb: 2, // Margin bottom for spacing
              py: 2,
              px: 3,
              textAlign: "center",
              backgroundColor: "#1e88e5", // Primary color background
              color: "#fff", // Text color
              fontWeight: "bold",
              borderRadius: "4px",
            }}
          >
            Total Registered Users: {users.length}
          </Box>
        </div>
      </main>
    </div>
  );
};

export default Admin;
