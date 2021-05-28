import { AuBankAccountElement } from "@stripe/react-stripe-js";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  AboutPage,
  AuthWrapper,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/cart" exact>
            <CartPage />
          </Route>
          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          <Route
            exact
            path="/products/:id"
            children={<SingleProductPage />}
          ></Route>
          <PrivateRoute path="/checkout" exact>
            <CheckoutPage />
          </PrivateRoute>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
