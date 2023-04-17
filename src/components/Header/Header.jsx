import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const username = user?.email?.split("@")[0];

  const handleLogout = () => {
    logOut()
      .then((result) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <ActiveLink to="/">Shop</ActiveLink>
        <ActiveLink to="/orders">Orders</ActiveLink>
        <ActiveLink to="/inventory">Inventory</ActiveLink>

        {!user && (
          <>
            <ActiveLink to="/login">Login</ActiveLink>
            <ActiveLink to="/signup">Sign Up</ActiveLink>
          </>
        )}

        {user && (
          <span className="profile-name">
            Welcome, {username}{" "}
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
