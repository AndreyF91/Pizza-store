import React from "react";
import "./Header.scss";
import logo from "../../assets/pizza-logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <div className="header__logo">
            <a href="/" className="header__logo--link">
              <img src={logo} alt="логотип" />
            </a>
          </div>
          <h1>PIZZA-STORE</h1>
          <div className="header__cart">
            <button className="header__btn" type="button">
              Корзина
            </button>
          </div>
        </div>
        <nav className="header__nav">
          <ul className="header__nav--list">
            <li className="header__nav--list--item">
              <NavLink to="/pizza">Пицца</NavLink>
            </li>
            <li className="header__nav--list--item">
              <NavLink to="/beverages">Напитки</NavLink>
            </li>
            <li className="header__nav--list--item">
              <NavLink to="/snacks">Закуски</NavLink>
            </li>
            <li className="header__nav--list--item">
              <NavLink to="/about">О нас</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
