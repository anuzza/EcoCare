import React, { useState, useEffect } from "react";
import "./Cart.css";
import CurrencyFormat from "react-currency-format";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.shop.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  // const [discount, setDiscount] = useState('');

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const renderItems = () => {
    if (totalItems > 0) {
      return cart.map((item) => <CartItem key={item.id} item={item} />);
    } else {
      return (
        <p className="cart__none">
          You have no items in your shopping cart.
          <Link to="/shop" className="link">
            {" "}
            Start adding some!
          </Link>
        </p>
      );
    }
  };

  const renderTotal = () => (
    <div className="cart__total">
      <p className="cart__total-title"> Subtotal:</p>
      <p className="cart__total-price">
        <CurrencyFormat
          renderText={(value) => (
            <span>
              ({totalItems} items): <strong>{value}</strong>
            </span>
          )}
          decimalScale={2}
          value={totalPrice}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </p>
    </div>
  );

  return (
    <div className="cart">
      <h4 className="cart__heading">Your Shopping Cart</h4>
      {renderItems()}
      {/* { renderDiscount() } */}
      {renderTotal()}
      <div className="cart__footer">
        <Link to="/checkout">
          {totalItems > 0 && (
            <button className="cart__checkout btn">Proceed To Checkout</button>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Cart;
