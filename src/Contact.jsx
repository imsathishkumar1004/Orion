import React from "react";
import { FaInstagram, FaGlobe } from "react-icons/fa"; // Updated import
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
              href="https://www.instagram.com/mca_kec_?igsh=OWo4YnhpbmM2NGZz"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://orion.kongu.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaGlobe className="social-icon" /> {/* Updated icon */}
            </a>
          </div>
        </div>

        {/* Right Side: Address Section */}
        <div className="contact-right">
          <h2>Address</h2>
          <p> MBA & MCA Block</p>
          <p>Kongu Engineering College</p>
          <p>Perundurai - 638060</p>
          <p>Email: orion@kongu.ac.in</p>
          <p>Phone: 
            <br />+91 91593 22662
            <br /> +91 93856 98235
            <br /> +91 63815 44729
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
