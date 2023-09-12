import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Card2 from "./Card-2";
import DashNavbar from "./DashNavbar";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Checkbox,
} from "@mui/material";

const ServiceProvider = () => {
  // Define state to store service provider data
  const [serviceProviders, setServiceProviders] = useState([
    {
      name: "Yohan Buddhika",
      category: "Plumbing",
      available: true,
    },
    {
      name: "Senuri Wickramasinghe",
      category: "Gardening",
      available: false,
    },
    {
      name: "Michelle Fernando",
      category: "Cleaning",
      available: false,
    },
    {
      name: "Kushantha Alwis",
      category: "Plumbing",
      available: false,
    },
    {
      name: "Avishka Fernando",
      category: "Lawn Mowing",
      available: false,
    },
  ]);

  // Function to handle changes in the "available" status
  const handleAvailabilityChange = (index) => {
    const updatedServiceProviders = [...serviceProviders];
    updatedServiceProviders[index].available =
      !updatedServiceProviders[index].available;
    setServiceProviders(updatedServiceProviders);
  };

  return (
    <div className="dashboard">
      <div className="slideBar">
        <img src="logo.png" alt="logo" className="dashboard--logo" />
        <ul className="ulContent">
          <Link to="/dashboard">
            <li>
              <div className="active--link">
                <div className="yellow--mark"></div>
                <ld>
                  <ld>
                    <img src="dashboard--icon1.png" alt="icon" />
                  </ld>
                </ld>
                <ld className="active1">Dashboard</ld>
              </div>
            </li>
          </Link>
          <li>
            <ld>
              <ld>
                <img src="dashboard--icon2.png" alt="icon" />
              </ld>
            </ld>
            <ld>Finance</ld>
          </li>
          <li>
            <ld>
              <ld>
                <img src="dashboard--icon3.png" alt="icon" />
              </ld>
            </ld>
            <ld>Chat</ld>
          </li>
          <li>
            <ld>
              <ld>
                <img src="dashboard--icon4.png" alt="icon" />
              </ld>
            </ld>
            <ld>Calendar</ld>
          </li>
        </ul>
      </div>
      <div className="dashboard-navbar">
        <DashNavbar
          firstName="Kaveen"
          avatar="Avatar.png"
          name="Kaveen Kalhara"
          role="Manager"
        />
      </div>
      <div className="cards-2">
        <Link to="/serviceprovider">
          <Card2 heading="Service Provider" active="card-2-active" />
        </Link>
        <Card2 heading="Customer" active="card-2" />
        <Card2 heading="Category" active="card-2" />
      </div>

      <div className="service-search-bar">
        <TextField
          label="Search Service Providers"
          variant="outlined"
          fullWidth
          value={() => {}}
          onChange={(e) => {}}
        />
      </div>
      <div className="service-table">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Available</TableCell>
                <TableCell>On/Off</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {serviceProviders.map((serviceProvider, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      value={serviceProvider.name}
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={serviceProvider.category}
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    {serviceProvider.available ? "Yes" : "No"}
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      checked={serviceProvider.available}
                      onChange={() => handleAvailabilityChange(index)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ServiceProvider;
