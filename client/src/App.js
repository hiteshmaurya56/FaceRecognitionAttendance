import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TakeAttendance from "./components/TakeAttendance";
import AddStudent from "./components/AddStudent";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="takeattendance"
            element={<TakeAttendance />}
          ></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/addstudent" element={<AddStudent />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
