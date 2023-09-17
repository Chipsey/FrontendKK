import React from "react";
import { Container, Text, Input, Textarea, Button } from "@mantine/core";
import Navbar from "../Navbar/Navbar";
import "./index.css";

const ContactUs = () => {
  return (
    <Container>
      <Navbar contact="active" back_page="text-wrappr-contact" />
      <div className="fade-in">
        <div className="contact-page-image">
          <img src="about-image.png" alt="PageImage" />
        </div>
        <div className="contact-content">
          <Text
            align="left"
            style={{ marginTop: 230, fontWeight: 700, fontSize: "50px" }}
          >
            CONTACT US
          </Text>
          <Text align="left" size="md" style={{ marginTop: 5, width: "500px" }}>
            Need help with something? Get in touch with our friendly team, and
            we’ll get in touch as soon as possible.
          </Text>
          <form
            action="#"
            method="post"
            style={{ marginTop: 20, width: "500px" }}
          >
            <div style={{ display: "flex", gap: 20 }}>
              <div style={{ flex: 1 }}>
                <Input
                  placeholder="First Name"
                  id="first_name"
                  name="first_name"
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <Input
                  placeholder="Last Name"
                  id="last_name"
                  name="last_name"
                  required
                />
              </div>
            </div>
            <div>
              <Input
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                required
              />
            </div>
            <div>
              <Input
                placeholder="Phone Number"
                id="phone"
                name="phone"
                type="tel"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Message"
                id="message"
                name="message"
                required
              />
            </div>
            <div>
              <Button type="submit" variant="filled" color="blue">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
