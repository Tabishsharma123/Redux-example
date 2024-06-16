import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import productReducer from "./Productslice";

// const reducer = combineReducers({
//   // here we will be adding reducers
//   cart: cartReducer,
//   product: productReducer,
// });
// // const store = createStore(
// //   reducer,
// //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// // );
// const store = configureStore({
//   reducer,
// });
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
