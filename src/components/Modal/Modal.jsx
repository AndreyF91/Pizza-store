import React, { useState } from "react";
import "./Modal.scss";

const Modal = ({ active, setActive, cardInfo, addOrder }) => {
  // добавочная стоимость
  const [radioValue, setRadioValue] = useState(0);
  // значение радио-кнопки
  const [radioKey, setRadioKey] = useState();

  const onChangeValue = (e) => {
    setRadioValue(e.target.value);
    setRadioKey(e.target.id);
  };
  
  // генерируем рандомное значение в пределах (min-max) для ID заказа
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;}
  
  // отправляем выбранный заказ с дополнительными параметрами в state
  const fullPrice = +radioValue + +cardInfo.itemPrice;
  const formHandler = () => {
    let orderId = getRandomIntInclusive(100, 20000);
    let itemQnt = 1;
    let calcPrice = fullPrice * itemQnt;
    addOrder(cardInfo, radioKey, fullPrice, itemQnt, calcPrice, orderId);
    setActive(false);
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
                ? "Доступен только один вариант для выбора"
                : Object.entries(cardInfo.itemSize).map(([key, value]) => (
                    <div key={key} className="modal__radio--btn">
                      <input
                        onChange={onChangeValue}
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
                      <label htmlFor={key}>{key + " " + value}г.</label>
                    </div>
                  ))}
            </div>
            <div className="modal__btn--inner">
              <button
                disabled={radioKey || !cardInfo.itemSize ? false : true }
                type="button"
                onClick={formHandler}
                className="modal__btn"
              >
                Добавить в корзину за {fullPrice} руб
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
