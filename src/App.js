import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import PizzaContainer from "./components/Pizza/PizzaContainer";
import BeveragesContainer from "./components/Beverages/BeveragesContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <section className="main">
          <Route path="/pizza" render={() => <PizzaContainer />} />
          <Route path="/beverages" render={() => <BeveragesContainer />} />
        </section>
      </div>
    </BrowserRouter>
  );
}




export default App;
