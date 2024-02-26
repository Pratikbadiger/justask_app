// cart.jsx
import React from 'react';
import { Card } from 'antd';


const Cart = ({ cartItems }) => {
    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            <div className="cart-items">
                {cartItems.map(item => (
                    <Card key={item.id} className="cart-item">
                        <img src={item.img} alt="item" />
                        <h3>{item.name}</h3>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Cart;
