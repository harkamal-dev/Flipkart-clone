import React from 'react'
import './Login.css';
import { useState} from 'react';

function Login() {

    const [email,setEmail] =useState('');
    const [password, setPassword] = useState('');

    

    return (
    <div className="outer-div-login">
        <div className="login-page-div">
            <div className="left-login-div">
                <img className="left-login-image" src="https://newbuckethk.s3.ap-south-1.amazonaws.com/flipkart+login+image.png" alt=""></img>
            </div>


            <div className="right-login-div">
                <form className="right-login-form">
                    <input className="email-input" value={email} onChange={e=>setEmail(e.target.value)} type="text" placeholder="Enter email/mobile number"></input>
                    <input className="email-input" value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Enter password"></input>
                    <p > By continuing, you agree to Flipkart Clone's Terms of Use and Privacy Policy.</p>
                    <button className="login-button" type="submit" >Login</button>
                    <p className="or-text">OR</p>
                    <button className="otp-button" type="submit" >Request OTP</button>
                </form>
            </div>


        </div>
        </div>
    )
}

export default Login
