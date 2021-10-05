import { combineReducers, createStore } from "redux";
import goodsReducer from "./goods-reducer";

let reducers = combineReducers({
    goodsPage: goodsReducer
});

let store = createStore(reducers);

export default store;
