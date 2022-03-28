import data from "../Comp/data.json";
import * as actionTypes from "./action";
const initialState = {
  products: data,
  currItem: null,
  cart: [],
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((item) => item.id === action.id);
      const inCart = state.cart.find((item) =>
        item.id === action.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((product) =>
              product.id == action.payload.id
                ? { ...product, qty: product.qty + 1 }
                : product
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    default:
      return state;
  }
  // return state;
};
export default shopReducer;
