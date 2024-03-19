import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import idReducer from "./id"

const Store = configureStore({
        reducer: {
          cart: cartReducer,
          id : idReducer,
        }
      });
      export default Store;