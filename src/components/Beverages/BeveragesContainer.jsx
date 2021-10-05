import React from "react";
import "./BeveragesContainer.scss";
import { connect } from "react-redux";
import Card from "../Card/Card";

const BeveragesContainer = (props) => {
  return (
    <div className="beverages__wrapper">
      {props.beverages.map((item) => (
        <Card
          img={item.beverageImg}
          name={item.beverageName}
          description={item.beverageDescription}
          price={item.beveragePrice}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  beverages: state.goodsPage.beverages,
});


export default connect(mapStateToProps)(BeveragesContainer);
