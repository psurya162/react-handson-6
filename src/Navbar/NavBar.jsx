import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Student from "./Student";

import About from "./About";
import ContextData from "./Cotextdata";
import { useState } from "react";
import Addnew from "./Addnew";
import Edit from "./Edit";


const Navbar = () => {
  const [data, setData] = useState([
    {
      name: "Alok kumar",
      batch: "EA 0",
      age: 24,
      course: "Menn",
    },
  ]);
  return (
    <>
      <Router>
        <div className="main">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Student">Student</NavLink>
          <NavLink to="/About">About</NavLink>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Student"
            element={
              <ContextData.Provider value={{ data: data, updateData: setData }}>
                <Student/>
              </ContextData.Provider>
            }
          />
           <Route
            path="/addnewStudent"
            element={
              <ContextData.Provider value={{ data: data, updateData: setData }}>
                <Addnew/>
              </ContextData.Provider>
            }
          />
           <Route
            path="/editstudent"
            element={
              <ContextData.Provider value={{ data: data, updateData: setData }}>
                <Edit/>
              </ContextData.Provider>
            }
          />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default Navbar;
