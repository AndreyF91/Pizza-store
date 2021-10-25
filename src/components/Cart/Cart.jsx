import React from "react";
import "./Cart.scss";
import bin from "../../assets/recycle-bin.png";

const Cart = ({ order, increase, decrease, removeItem }) => {
  return (
    <div className="cart">
      {order.map((i) => {
        return (
          <div key={i.itemInfo.itemId} className="cart__item">
            <div className="cart__title">
              <h3>{i.itemInfo.itemName}</h3>
              <button
                  className="btns__bin"
                  onClick={() => removeItem(i.orderId)}
                >
                  <img src={bin} alt="Удалить" />
                </button>
            </div>
            <div className="cart__info--wrapper">
              <img
                src={i.itemInfo.itemImg}
                alt="картинка"
                className="cart__img"
              />

              <div className="cart__info">
                <p>Тип: {i.itemKey ? i.itemKey : "(...)"}</p>
                <div className="cart__title--btns">
                <div className="btns__change">
                  <button
                    disabled={i.itemQnt === 1 ? true : false}
                    onClick={() => decrease(i.orderId)}
                  >
                    - 
                  </button>
                  <p>{i.itemQnt}</p>
                  <button onClick={() => increase(i.orderId)}>+</button>{" "}
                </div>
                
              </div>
              </div>
              <div className="cart__info--fullPrice">
                Стоимость: <p>{i.calcPrice}</p> руб
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
