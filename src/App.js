import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Redirect, Route } from "react-router";
import { useState } from "react";
import Header from "./components/Header/Header";
import GoodsContainer from "./components/Pizza/GoodsContainer";
import Modal from "./components/Modal/Modal";
import OrderForm from "./components/OrderForm/OrderForm";

function App(props) {
  const [modalActive, setModalActive] = useState(false);
  const [cardInfo, setCardInfo] = useState("");

  let showCardInfo = (item) => {
    setCardInfo(item);
    setModalActive(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          order={props.order}
          totalCount={props.totalCount}
          totalPrice={props.totalPrice}
          removeItem={props.removeItem}
          increase={props.increase}
          decrease={props.decrease}
        />
        <section className="main">
          <Modal
            addOrder={props.addOrder}
            active={modalActive}
            setActive={setModalActive}
            cardInfo={cardInfo}
          />
          <Redirect from="/" to="/pizza" />
          <Route
            path="/pizza"
            render={() => (
              <GoodsContainer
                data={props.pizza}
                setActive={setModalActive}
                showInfo={showCardInfo}
              />
            )}
          />
          <Route
            path="/beverages"
            render={() => (
              <GoodsContainer
                data={props.beverages}
                setActive={setModalActive}
                showInfo={showCardInfo}
              />
            )}
          />
          <Route
            path="/snacks"
            render={() => (
              <GoodsContainer
                data={props.snacks}
                setActive={setModalActive}
                showInfo={showCardInfo}
              />
            )}
          />
          <Route
            path="/form"
            render={() => <OrderForm order={props.order} totalPrice={props.totalPrice} />}
          />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
