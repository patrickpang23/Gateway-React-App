import React from "react";
import "../Styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        {/* IMPORTANT */}
        {/* <nav is used to navigate */}
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/ToDo">Things To Do</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
