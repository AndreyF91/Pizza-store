import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Redirect, Route } from "react-router";
import PizzaContainer from "./components/Pizza/PizzaContainer";
import BeveragesContainer from "./components/Beverages/BeveragesContainer";
import SnacksContainer from "./components/Snacks/SnacksContainer";
import { useState } from "react";
import CardInfo from "./components/Card/CardInfo/CardInfo";

function App() {
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
          <CardInfo active={modalActive} setActive={setModalActive} cardInfo={cardInfo} />
          <Redirect from="/" to="/pizza" />
          <Route
            path="/pizza"
            render={() => <PizzaContainer setActive={setModalActive} showInfo={showCardInfo} />}
          />
          <Route
            path="/beverages"
            render={() => <BeveragesContainer setActive={setModalActive} showInfo={showCardInfo} />}
          />
          <Route
            path="/snacks"
            render={() => <SnacksContainer setActive={setModalActive} showInfo={showCardInfo} />}
          />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
