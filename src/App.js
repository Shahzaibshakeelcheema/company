import React from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Services } from "./Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  return (
    <div> 
    <TopBar/>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
