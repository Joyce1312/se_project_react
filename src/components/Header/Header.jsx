import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";

function Header({ handleAddClick, weatherData }) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened((menuStatus) => {
      return !menuStatus;
    });
  };

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo-container">
        <NavLink to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </NavLink>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div
        className={`header__mobile-menu ${
          isMobileMenuOpened ? "header__mobile-menu_active" : ""
        }`}
      >
        <button
          onClick={toggleMobileMenu}
          className={`header__close-btn ${
            isMobileMenuOpened ? "header__close-btn_active" : ""
          }`}
        ></button>
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          aria-label="Add Clothes Button"
          className={`header__add-clothes-btn ${
            isMobileMenuOpened ? "header__add-clothes-btn_active" : ""
          }`}
        >
          + Add Clothes
        </button>
        <NavLink className="header__nav-link" to="/profile">
          <div
            className={`header__user-container ${
              isMobileMenuOpened ? "header__user-container_active" : ""
            }`}
          >
            <p className="header__username">Terrence Tegegne</p>
            <img
              src={avatar}
              alt="Terrence Tegegne"
              className="header__avatar"
            />
          </div>
        </NavLink>
      </div>
      <button
        onClick={toggleMobileMenu}
        className="header__mobile-menu-btn"
        type="button"
        aria-label="mobile menu button"
      ></button>
    </header>
  );
}

export default Header;
