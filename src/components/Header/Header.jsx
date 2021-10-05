import React from "react";
import "./Header.scss";
import logo from "../../assets/pizza-logo.png";

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
              <a href="/">Пицца</a>
            </li>
            <li className="header__nav--list--item">
              <a href="/">Закуски</a>
            </li>
            <li className="header__nav--list--item">
              <a href="/">Напитки</a>
            </li>
            <li className="header__nav--list--item">
              <a href="/">О нас</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
