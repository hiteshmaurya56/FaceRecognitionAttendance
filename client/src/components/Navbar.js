import React from "react";
import "../css/navbar.css";
import logo from "./images/logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Navbar" className="logo" />
        </Link>
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <Link className="navbar-link" to="/ ">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar-link" to="/takeattendance">
                Take Attendance
              </Link>
            </li>
            <li>
              <Link className="navbar-link" to="/addstudent">
                Add New Student
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
