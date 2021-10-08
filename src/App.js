import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Redirect, Route } from "react-router";
import { useState } from "react";
import Header from "./components/Header/Header";
import GoodsContainer from "./components/Pizza/GoodsContainer";
import Modal from "./components/Modal/Modal";

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
        <Header />
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
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
