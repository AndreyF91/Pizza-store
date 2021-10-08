import React from "react";
import Card from "../Card/Card";
import "./GoodsContainer.scss";

const GoodsContainer = (props) => {
  return (
    <div className="pizza__wrapper">
      {props.data.map((item) => (
        <Card
          item={item}
          showInfo={props.showInfo}
          setActive={props.setActive}
          img={item.itemImg}
          name={item.itemName}
          description={item.itemDescription}
          price={item.itemPrice}
        />
      ))}
    </div>
  );
};

export default GoodsContainer;
