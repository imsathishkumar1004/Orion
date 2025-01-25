import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Event from "./Event";
import Technical from "./Technical";
import NonTechnical from "./Non_texhnical";
import About from "./About";
import Contact from "./Contact";
import Team from "./Team";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/non-technical" element={<NonTechnical />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />}/>
      </Routes>
    </Router>
  );
};

export default App;
