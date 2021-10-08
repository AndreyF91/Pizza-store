import React from "react";
import { connect } from "react-redux";
import App from "./App";
import { addOrderActionCreator } from "./redux/goods-reducer";

const AppContainer = (props) => {
  return (
    <App
      addOrder={props.addOrder}
      pizza={props.pizza}
      beverages={props.beverages}
      snacks={props.snacks}
    />
  );
};

const mapStateToProps = (state) => ({
  pizza: state.goodsPage.pizza,
  beverages: state.goodsPage.beverages,
  snacks: state.goodsPage.snacks,
});

export default connect(mapStateToProps, { addOrder: addOrderActionCreator })(
  AppContainer
);
debugger
