import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const totalShipping = cart.reduce((acc, curr) => acc + curr.shipping, 0);
  const totalTax = totalPrice * 0.1;
  const grandTotal = totalPrice + totalShipping + totalTax;

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
        <p>Selected items: {cart.length}</p>
        {cart.map((prod) => console.log("prod", prod))}
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${totalTax.toFixed(2)}</p>
        <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>

        <button className="btn-clear-cart">Clear Cart</button>
        <button className="btn-review-order">Review Order</button>
      </div>
    </div>
  );
};

export default Shop;
