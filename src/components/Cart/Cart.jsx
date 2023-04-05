import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// const Cart = ({cart}) => { // option 3
const Cart = (props) => {
  // const cart = props.cart; // option 1
  const { cart, handleClearCart } = props; // option 2

  /* let totalPrice = 0;
  let quantity = 0;
  let totalShipping = 0;
  for (const product of cart) {
    // if (product.quantity === 0) {
    //   product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
    quantity = quantity + product.quantity;
  }
  const totalTax = (totalPrice * 10) / 100;
  const grandTotal = totalPrice + totalShipping + totalTax; */

  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * (curr.quantity === 0 ? 1 : curr.quantity),
    0
  );
  const totalShipping = cart.reduce(
    (acc, curr) => acc + curr.shipping * curr.quantity,
    0
  );
  const totalTax = totalPrice * 0.1;
  const grandTotal = totalPrice + totalShipping + totalTax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected items: {quantity}</p>
      {/* {cart.map((prod) => console.log("prod", prod))} */}
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${totalTax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>

      <button className="btn-clear-cart" onClick={handleClearCart}>
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
