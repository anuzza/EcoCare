import React from "react";
import { useHistory } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { emptyCart } from "../../redux/shopping/shoppingActions";
import Logo from "../../images/logoEC.png";

const StripeButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_80h0huWPQFW7WhyBvI6jgZrN00RzZI4H51";
  const history = useHistory();

  const onToken = (token) => {
    history.push("/");
    clearCart();
    alert("Your Payment is Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="EcoCare"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(emptyCart()),
  };
};

export default connect(null, mapDispatchToProps)(StripeButton);
