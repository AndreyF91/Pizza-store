import React from "react";
import { connect } from "react-redux";
import App from "./App";
import {
  addOrderActionCreator,
  decreaseQntActionCreator,
  increaseQntActionCreator,
  removeItemActionCreator,
} from "./redux/goods-reducer";

const AppContainer = (props) => {
  return (
    <App
      addOrder={props.addOrder}
      removeItem={props.removeItem}
      increase={props.increase}
      decrease={props.decrease}
      pizza={props.pizza}
      beverages={props.beverages}
      snacks={props.snacks}
      order={props.order}
      totalCount={props.totalCount}
      totalPrice={props.totalPrice}
    />
  );
};

const mapStateToProps = (state) => ({
  pizza: state.goodsPage.pizza,
  beverages: state.goodsPage.beverages,
  snacks: state.goodsPage.snacks,
  order: state.goodsPage.order,
  totalCount: state.goodsPage.totalCount,
  totalPrice: state.goodsPage.totalPrice
});

export default connect(mapStateToProps, {
  addOrder: addOrderActionCreator,
  removeItem: removeItemActionCreator,
  increase: increaseQntActionCreator,
  decrease: decreaseQntActionCreator
})(AppContainer);
