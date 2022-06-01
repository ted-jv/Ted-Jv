import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer/reducer";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

let store = createStore(reducer, enhancer);

export default store;
