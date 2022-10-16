import React, { useState, useEffect } from "react";
import "./Menu.css";
import logo from "../../images/logoEC.png";
import { MdOutlineShoppingBag } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

function Menu({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="menu__container">
      <div className="menu__long">
        <NavLink to="/">
          <img src={logo} alt="" className="menu__logo" />
        </NavLink>
        <nav>
          <NavLink exact to="/" activeClassName="selected" className="text">
            home
          </NavLink>
          <NavLink exact to="/shop" activeClassName="selected" className="text">
            shop
          </NavLink>
          <NavLink exact to="/faqs" activeClassName="selected" className="text">
            FAQs
          </NavLink>
          <NavLink
            exact
            to="/about"
            activeClassName="selected"
            className="text"
          >
            About
          </NavLink>
          <NavLink
            exact
            to="/contact"
            activeClassName="selected"
            className="text"
          >
            contact
          </NavLink>
        </nav>
        <div className="menu__icons">
          <Link to="/cart">
            <div className="menu__basket menu__icons">
              <MdOutlineShoppingBag />
              <span className="menu__basketCount">{cartCount}</span>
            </div>
          </Link>
        </div>
      </div>
      <MobileMenu className="mobile__menu" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Menu);
