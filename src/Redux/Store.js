import { createStore } from "redux";
import shopReducer from "./shopReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const Store = createStore(shopReducer, composeWithDevTools());
export default Store;
