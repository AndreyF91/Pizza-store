import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import PizzaContainer from "./components/Pizza/PizzaContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <section className="main">
          <Route path="/pizza" render={() => <PizzaContainer />} />
        </section>
      </div>
    </BrowserRouter>
  );
}




export default App;
