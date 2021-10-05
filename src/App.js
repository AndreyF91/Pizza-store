import "./App.scss";
import Header from "./components/Header/Header";
import PizzaCard from "./components/Card/Card";



function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </section>
    </div>
  );
}

export default App;
