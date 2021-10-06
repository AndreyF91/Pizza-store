import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import "./SnacksContainer.scss";

const SnacksContainer = (props) => {
  return (
    <div className="snacks__wrapper">
      {props.snacks.map((item) => (
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

let mapStateToProps = (state) => ({
  snacks: state.goodsPage.snacks,
});

export default connect(mapStateToProps)(SnacksContainer);
