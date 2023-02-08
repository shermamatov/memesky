// import { rootReduser } from "./reducers/index";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReduser } from "./reducers";

export const store = createStore(rootReduser, applyMiddleware(thunk));
