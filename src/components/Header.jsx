import React from "react";
import "../css/Header.css";
import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <input
          type="text"
          className="navbar-search"
          placeholder="Search..."
          aria-label="Search"
        />
      </div>
      <div className="navbar-right">
        <FaBell className="navbar-icon" />
        <img
          src="https://i.pravatar.cc/40"
          alt="User avatar"
          className="navbar-avatar"
        />
      </div>
    </header>
  );
};

export default Header;
