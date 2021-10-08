import React from "react";
import "./Card.scss";

const Card = (props) => {
  
  return (
    <div className="card">
      <img
        src={props.img}
        alt="pizza-img"
        className="card__img"
      />
      <div className="card__info">
        <h3>{props.name}</h3>
        <p>
          {props.description}
        </p>
      </div>
      <div className="card__price">
        <p>от {props.price} руб.</p>
        <button className="card__btn" type="button" onClick={() => props.showInfo(props.item)}>Выбрать</button>
      </div>
    </div>
  );
};

export default Card;
