import React, { useState, useEffect } from "react";
import "./AddressForm.css";
import { useSelector } from "react-redux";
import StripeButton from "../stripe/StripeButton";

const AddressForm = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const cart = useSelector((state) => state.shop.cart);

  useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      price += item.qty * item.price;
    });

    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice]);

  const initialFormData = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="addressForm">
        <h2 className="header">Billing Details</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            name="firstName"
            placeholder="First Name"
            type="text"
            required
            onChange={onChange}
          />
          <input
            name="lastName"
            placeholder="Last Name"
            type="text"
            required
            onChange={onChange}
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            required
            onChange={onChange}
          />
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            type="text"
            required
            onChange={onChange}
          />
          <input
            name="address"
            placeholder="Enter Details of Delivery Address"
            type="text"
            required
            onChange={onChange}
          />
          <input
            name="city"
            placeholder="City"
            type="text"
            required
            onChange={onChange}
          />
          <StripeButton price={totalPrice} />
        </form>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/23 CVV: 123
      </div>
    </>
  );
};

export default AddressForm;
