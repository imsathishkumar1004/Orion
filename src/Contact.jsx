import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        {/* Left Side: Follow Us Section */}
        <div className="contact-left">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaFacebook className="social-icon" />
            </a>
          </div>
        </div>

        {/* Right Side: Address Section */}
        <div className="contact-right">
          <h2>Address</h2>
          <p> MBA & MCA Block</p>
          <p>Kongu Engineering College</p>
          <p>Perundurai - 638060</p>
          <p>Email: mca@kongu.edu</p>
          <p>Phone: +91 91593 22662</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
