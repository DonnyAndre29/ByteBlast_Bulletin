import React, { useState } from "react";
import '../SignUp_Login/SignUp_Login.css'

import user_icon from '../SignUp_Login/person.png'
import email_icon from '../SignUp_Login/email.png'
import password_icon from '../SignUp_Login/password.png'

const SignUp_Login = () => {

    const [action, setAction] = useState('Sign Up');

        return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === 'Login'?<div></div>:  <div className="input">
                <img src= {user_icon} alt="" />
                <input type="text" placeholder="Name" />
            </div>}
            
            <div className="input">
                <img src= {user_icon} alt="" />
                <input type="text" placeholder="Name" />
            </div>
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email Id" />
            </div>
            
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password"/>
            </div>
            </div>
            {action === 'Sign up'?<div></div>: <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
            
            <div className="submit-container">
                <div className= {action === 'Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
                <div className= {action === 'Sign Up'?'submit gray':'submit'} onClick={()=>{setAction('Login')}}>Login</div>
            </div>
        </div>
    )

};


export default SignUp_Login;