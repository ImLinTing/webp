import React from 'react';
import fakeData from '../../fakeData.js';
import {useState} from 'react';
import './User.css'
import UserInfo from '../UserInfo/UserInfo'
import Cart from '../Cart';

const User = () => {
    // console.log(fakeData);
    const first10 = fakeData;
    const [users, setUsers] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddBtn = (user) => {
       const newCart = [...cart, user];
       setCart(newCart)
    }
    return (
        <div className="main-area">
            <div className="user-container">
                {
                users.map(us => <UserInfo 
                    user={us}
                    handleAddBtn={handleAddBtn}>
                    </UserInfo>)
                }
            </div>
            <div className="total-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default User;