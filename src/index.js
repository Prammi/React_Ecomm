import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

// learnfromscratch.us.auth0.com
// hXZvoZFYfWIP5DA2FCO6rowK9qmX9v0b
// IF5WviXVEh4NFKRPCYR-xRxEjjhIPJczeFGXiCMRLPWGYd1YOVW2NRiXYDI1U4A2
ReactDOM.render(
  <Auth0Provider
    domain="learnfromscratch.us.auth0.com"
    clientId="hXZvoZFYfWIP5DA2FCO6rowK9qmX9v0b"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
