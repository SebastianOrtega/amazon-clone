import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";
import { useStateValue } from "./stateProvider";
import Header from "./components/header";
import Home from "./components/home";
import Checkout from "./components/checkout";
import Payment from "./components/payment";
import Login from "./components/login";
import { auth } from "./firebase";

const promise = loadStripe(
  "pk_test_51HPauSBHdHkqsvgDaJiwEvDEubRtkquJXmWfXnY4jlS2GQGFwpmWVvDhTpd4ZaF42xD2s4eFglttytjMfWhIZ5RG0053jH6jHc"
);

function App() {
  const [basket, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user: ", authUser?.email);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        {" "}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Header />
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
