import React from "react";
import "./BeveragesContainer.scss";
import { connect } from "react-redux";
import Card from "../Card/Card";

const BeveragesContainer = (props) => {
  return (
    <div className="beverages__wrapper">
      {props.beverages.map((item) => (
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

const mapStateToProps = (state) => ({
  beverages: state.goodsPage.beverages,
});

export default connect(mapStateToProps)(BeveragesContainer);
