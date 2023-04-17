import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <ActiveLink to="/">Shop</ActiveLink>
        <ActiveLink to="/orders">Orders</ActiveLink>
        <ActiveLink to="/inventory">Inventory</ActiveLink>
        <ActiveLink to="/login">Login</ActiveLink>
        <ActiveLink to="/signup">Sign Up</ActiveLink>
      </div>
    </nav>
  );
};

export default Header;
