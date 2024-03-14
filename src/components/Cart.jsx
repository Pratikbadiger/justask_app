
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>{item.name} - {item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
