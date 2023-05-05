import React from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Services } from "./Services";
//import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";
// import AppNavbar from "./AppNavBar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
        
        </Routes>
      </BrowserRouter>
      <TopBar/>
    </div>
  );
}

export default App;
