import React, { useState } from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Services } from "./Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootswatch/dist/lux/bootstrap.min.css";
import NumberList from "./NumberList";
import SignUp from "./SignUp";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [objs, setObjs] = useState([
    { title: "Shahzaib", post: "MERN", empId: 1 },
    { title: "Awais", post: "MERN", empId: 2 },
  ]);

  // const handleUpdateNumber = (index, value) => {
  //   const updatedNumbers = [...numbers];
  //   updatedNumbers[index] = value;
  //   setNumbers(updatedNumbers);  updateNumber={handleUpdateNumber} setObj={setObjs}
  //};
  return (
    <div>
      <TopBar />

      <BrowserRouter>
        <Routes>
          <Route
            path="/insel"
            element={
              <NumberList
                numbers={numbers}
                setNumbers={setNumbers}
                objs={objs}
                setObjs={setObjs}
                
              />
            }
          />
          <Route path="/login" element={<SignUp/>} />

          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/" element={<SignUp/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
