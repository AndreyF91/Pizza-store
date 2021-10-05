import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import "./SnacksContainer.scss";

const SnacksContainer = (props) => {
  return (
    <div className="snacks__wrapper">
      {props.snacks.map((item) => (
        <Card
          img={item.snackImg}
          name={item.snackName}
          description={item.snackDescription}
          price={item.snackPrice}
        />
      ))}
    </div>
  );
};

let mapStateToProps = (state) => ({
  snacks: state.goodsPage.snacks,
});

export default connect(mapStateToProps)(SnacksContainer);
