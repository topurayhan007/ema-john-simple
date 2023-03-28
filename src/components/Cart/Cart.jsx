import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// const Cart = ({cart}) => { // option 3
const Cart = (props) => {
  // const cart = props.cart; // option 1
  const { cart } = props; // option 2

  /* let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (total * 10) / 100;
  const grandTotal = totalPrice + totalShipping + tax; */

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const totalShipping = cart.reduce((acc, curr) => acc + curr.shipping, 0);
  const totalTax = totalPrice * 0.1;
  const grandTotal = totalPrice + totalShipping + totalTax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected items: {cart.length}</p>
      {/* {cart.map((prod) => console.log("prod", prod))} */}
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${totalTax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>

      <button className="btn-clear-cart" onClick={props.handleClearCart}>
        Clear Cart <FontAwesomeIcon icon={faTrashCan} />
      </button>
      <br />
      <button className="btn-review-order">
        Review Order <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Cart;
