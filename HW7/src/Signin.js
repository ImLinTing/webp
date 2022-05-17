import React from 'react';

function Signin() {
    return (
        <form>
            <div>
                <h1>CGU Login</h1>
                <div>
                    <label>User Name </label>
                    <input type="text" name="name"/>
                </div>
                <p></p>
                <div>
                    <label>Password </label>
                    <input type="password" name="password"/>
                </div>
                <p></p>
                <input type="submit" value="登入"></input>
            </div>
        </form>    
    );
}

export default Signin;