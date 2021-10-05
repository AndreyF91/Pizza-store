import { combineReducers, createStore } from "redux";
import pizzaReducer from "./pizza-reducer";

let reducers = combineReducers({
    pizzaPage: pizzaReducer
});

let store = createStore(reducers);

export default store;
