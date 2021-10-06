import React from "react";
import "./CardInfo.scss";

const CardInfo = ({active, setActive, cardInfo}) => {
  debugger
  return (
    <div className={active ? "modal--active" : "modal"} onClick={()=> setActive(false)}>
      <div className={active ? "modal__content--active" : "modal__content"} onClick={e => e.stopPropagation()}>
        <div className="modal__img">
          <img src={cardInfo.itemImg} alt="" />
        </div>
        <div className="modal__info">
          <h2>{cardInfo.itemName}</h2>
        <p>{cardInfo.itemDescription}</p>
          <form>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
