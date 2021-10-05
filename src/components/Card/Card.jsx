import React from "react";
import "./Card.scss";

const PizzaCard = (props) => {
  return (
    <div className="card">
      <img
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/338a8304-9227-44fa-b326-95c1472c95e1.jpg"
        alt="pizza-img"
        className="card__img"
      />
      <div className="card__info">
        <h3>Pizza name</h3>
        <p>
          Острый цыпленок, томатный соус, сладкий перец, красный лук, моцарелла,
          острый перец халапеньо, томаты, соус сальса
        </p>
      </div>
      <div className="card__price">
        <p>от 17,90 руб.</p>
        <button className="card__btn" type="button">Выбрать</button>
      </div>
    </div>
  );
};

export default PizzaCard;
