import React, { useState } from "react";
import "./Modal.scss";

const Modal = ({ active, setActive, cardInfo, addOrder }) => {
  const [radioValue, setRadioValue] = useState(0);

  let onChangeValue = (e) => {
    setRadioValue(e.target.value);
  };

  let price = +cardInfo.itemPrice;
  let fullPrice = +radioValue + price;

  let formHandler = () => {
    let itemId = cardInfo.id;
    let itemName = cardInfo.itemName;
    addOrder(itemId, itemName, fullPrice)
  };

  return (
    <div
      className={active ? "modal--active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content--active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__img">
          <img src={cardInfo.itemImg} alt="" />
        </div>
        <div className="modal__info">
          <h2>{cardInfo.itemName}</h2>
          <p>{cardInfo.itemDescription}</p>
          <form>
            <div className="modal__radio">
              {!cardInfo.itemSize
                ? "Выбора нет"
                : Object.entries(cardInfo.itemSize).map(([key, value]) => (
                    <div className="modal__radio--btn" onChange={onChangeValue}>
                      <input
                        type="radio"
                        name="size"
                        id={key}
                        value={
                          key === "Small"
                            ? cardInfo.itemAddPrice["small"]
                            : key === "Mid"
                            ? cardInfo.itemAddPrice["mid"]
                            : key === "Big"
                            ? cardInfo.itemAddPrice["big"]
                            : null
                        }
                      />
                      <label for={key}>{key + " " + value}г.</label>
                    </div>
                  ))}
            </div>
            <div className="modal__btn--inner">
              <button type="button" onClick={formHandler} className="modal__btn">
                Добавить в корзину за {fullPrice}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
