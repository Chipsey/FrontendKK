import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import CSRNavbar from "./CSRNavbar";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Avatar,
  Button,
} from "@mui/material";

const CSR = () => {
  const tableData = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "+1234567890",
      status: "Active",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "+1234567890",
      status: "Active",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "+1234567890",
      status: "Active",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "+1234567890",
      status: "Active",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "+1234567890",
      status: "Active",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      contact: "+9876543210",
      status: "Offline",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      contact: "+9876543210",
      status: "Offline",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      contact: "+9876543210",
      status: "Offline",
    },
    // Add more data as needed
  ];

  return (
    <div className="dashboard">
      <div className="slideBar">
        <img src="logo.png" alt="logo" className="dashboard--logo" />
        <ul className="ulContent">
          <Link to="/dashboard">
            <li>
              <ld>
                <ld>
                  <img src="dashboard--icon1.png" alt="icon" />
                </ld>
              </ld>
              <ld>Dashboard</ld>
            </li>
          </Link>
          <Link to="/finance">
            <li>
              <ld>
                <ld>
                  <img src="dashboard--icon2.png" alt="icon" />
                </ld>
              </ld>
              <ld>Finance</ld>
            </li>
          </Link>
          <li>
            <ld>
              <ld>
                <img src="dashboard--icon3.png" alt="icon" />
              </ld>
            </ld>
            <ld>Complaints Box</ld>
          </li>
          <Link to="/csr">
            <li>
              <div className="active--link">
                <div className="yellow--mark"></div>
                <ld>
                  <ld>
                    <img src="dashboard--icon4.png" alt="icon" />
                  </ld>
                </ld>
                <ld className="active1">CSR</ld>
              </div>
            </li>
          </Link>
        </ul>
      </div>
      <div className="dashboard-navbar">
        <CSRNavbar
          firstName="Kaveen"
          avatar="Avatar.png"
          name="Kaveen Kalhara"
          role="Manager"
        />
      </div>
      <Link to="/addcsr">
        <Button
          elevation={0}
          variant="contained"
          style={{
            marginLeft: "350px",
            backgroundColor: "#FFCF70",
            color: "black",
          }}
        >
          Add CSR
        </Button>
      </Link>
      <Paper
        elevation={0}
        style={{
          width: "1014px",
          margin: "20px 0 0px 350px",
          padding: "10px",
          backgroundColor: "white",
          maxHeight: "500px",
          overflowY: "auto",
        }}
        className="fade-in"
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Avatar src={`avatar-${index}.png`} alt={row.name} />
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.contact}</TableCell>
                <TableCell
                  className={
                    row.status === "Active" ? "active-status" : "offline-status"
                  }
                >
                  <span
                    className={
                      row.status === "Active"
                        ? "status-cell-active"
                        : "status-cell-offline"
                    }
                  />
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default CSR;
