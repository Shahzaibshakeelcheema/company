import React from "react";
import ReactDOM from "react-dom/client";

import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Services } from "./Services";
//import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";
import AppNavbar from "./AppNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopBar />}>
            <Route index element={<Home />} />
            <Route path="./SecondSec.js" element={<Contact />} />
            <Route path="./IndusSec.js" element={<About />} />
            <Route path="./ClientSec.js" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <AppNavbar />
      <Home />
      <About />
      <Contact />
      <Services />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
