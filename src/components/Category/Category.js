import React from "react";
import { Container, Text } from "@mantine/core";
import Navbar from "../Navbar/Navbar";
import "./index.css";
import Card from "./CCard";

const Category = () => {
  return (
    <Container>
      <Navbar category="active" back_page="text-wrappr-contact" />
      <div className="contact-page-image">
        <img src="about-image.png" alt="PageImage" />
      </div>
      <div className="category-content">
        <Text
          align="left"
          style={{ marginTop: 230, fontWeight: 700, fontSize: "50px" }}
        >
          CATEGORY
        </Text>
        <div className="category-cards">
          <Card heading="PLUMBING" image="category.png" />
          <Card heading="CLEANING" image="category.png" />
        </div>
        <div className="category-cards">
          <Card heading="LAWN MOVING" image="category.png" />
          <Card heading="HAIR CUTTING" image="category.png" />
        </div>
      </div>
    </Container>
  );
};

export default Category;