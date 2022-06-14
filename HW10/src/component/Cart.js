import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
        total = total + user.salary;
        
    }

    return (
        <div>
            <h1>Profile: {cart.length}</h1>
    <h3>Total Salary: {total}</h3>
        </div>
    );
};

export default Cart;