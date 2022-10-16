import React from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/cart/Cart";
import AddressForm from "./components/checkout/AddressForm";
import ScrollToTop from "./components/scrollToTop";
import FAQs from "./components/faqs/FAQs";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={AddressForm} />
      </Switch>
    </Router>
  );
}

export default App;
