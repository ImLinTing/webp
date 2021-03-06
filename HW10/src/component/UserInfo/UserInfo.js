import React from 'react';
import './UserInfo.css'

const UserInfo = (props) => {
    const { img, name, username, email, phone, salary } = props.user;
    return (
        <div>
            <div className="card">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h4>Username: {username}</h4>
                <h4>Email: {email}</h4>
                <h4>Phone: {phone}</h4>
                <h4 className="salary">Salary: {salary}</h4>
                <button onClick={()=> props.handleAddBtn(props.user)}>Add</button>
            </div>
        </div>
    );
};

export default UserInfo;