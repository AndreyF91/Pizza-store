import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import goodsReducer from "./goods-reducer";

let reducers = combineReducers({
  goodsPage: goodsReducer,
});

let store = createStore(reducers, composeWithDevTools());

export default store;
