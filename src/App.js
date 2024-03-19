import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./Component/Navbar";
import Categorypage from "./Component/Categorypage";
import Home from "./Component/Home";
import ShopNow from "./Component/ShopNow";
import Singleproduct from "./Component/Singleproduct";
import Lowerbar from "./Component/Lowerbar";
import Cart from "./Component/Cart";
import Store from "./utiles/store"
import Checkout from "./Component/Checkout";
import Payment from "./Component/Payment";
import Success from "./Component/Success";
import Search from "./Component/Search";
import Register from "./Component/Register";
import Login from "./Component/Login";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/ShopNow" element={<ShopNow />} />
          <Route path="/products/:category" element={<Categorypage />} />
          <Route path="/product/:productId" element={<Singleproduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/success/PAYMENT_SUCCESS/:id" element={<Success />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Lowerbar /> */}
      </BrowserRouter>

    </Provider>
  );
}

export default App;
