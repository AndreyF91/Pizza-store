import "./App.scss";
import Header from "./components/Header/Header";
import PizzaCard from "./components/Card/Card";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <section className="main">
          <Route path="/pizza" render={() => <PizzaCard />} />
        </section>
      </div>
    </BrowserRouter>
  );
}




export default App;
