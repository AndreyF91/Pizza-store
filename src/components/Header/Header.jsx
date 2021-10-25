import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/pizza-logo.png";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Header = (props) => {
  const [cartMode, setCartMode] = useState(false);

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
            {/* <Button
              setCartMode={setCartMode}
              totalCount={props.totalCount}
              cartMode={cartMode}
            >
              Корзина{" "}
              <span className="header__btn--span">{props.totalCount}</span>
            </Button> */}
            <button
              className="header__btn"
              type="button"
              onClick={() => setCartMode(!cartMode)}
            >
              Корзина{" "}
              <span className="header__btn--span">{props.totalCount}</span>
            </button>
            <div
              className={
                !cartMode || props.order.length < 1
                  ? "header__cart--wrapper"
                  : "header__cart--wrapper--active"
              }
            >
              <div className="header__cart--arrow"></div>
              <div className="header__cart--info">
                <Cart
                  order={props.order}
                  increase={props.increase}
                  decrease={props.decrease}
                  removeItem={props.removeItem}
                />
                <div className="header__cart--total">
                  <span>Сумма заказа: {props.totalPrice} руб.</span>
                  <Link to="/form">
                    <button onClick={() => setCartMode(false)}>Сделать заказ</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="header__nav">
          <ul className="header__nav--list">
            <li className="header__nav--list--item">
              <Link to="/pizza">Пицца</Link>
            </li>
            <li className="header__nav--list--item">
              <Link to="/beverages">Напитки</Link>
            </li>
            <li className="header__nav--list--item">
              <Link to="/snacks">Закуски</Link>
            </li>
            <li className="header__nav--list--item">
              <Link to="/about">О нас</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
