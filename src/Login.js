import React from 'react'
import './Login.css';
import { useState} from 'react';
import { auth } from './firebase';
import {useHistory} from 'react-router-dom';
import './reducer';

function Login() {

    const history = useHistory();
    const [email,setEmail] =useState('');
    const [password, setPassword] = useState('');

    const Login =(e)=>{
        e.preventDefault();

        if(!email){
            alert('enter email');
        }
        if(!password){
            alert('enter password');
        }

        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                history.push('/')
            }else{
                alert("Please register first")
            }
        }
        ).catch(error=>alert.error)
    }

    
    const Register =(e)=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth)
                history.push('/')
        }).catch(error=>alert.error)
    }


    return (
    <div className="outer-div-login">
        <div className="login-page-div">
            <div className="left-login-div">
                <img className="left-login-image" src="https://newbuckethk.s3.ap-south-1.amazonaws.com/flipkart+login+image.png" alt=""></img>
            </div>


            <div className="right-login-div">
                <form className="right-login-form">
                    <input className="email-input" value={email} onChange={e=>setEmail(e.target.value)} type="text" placeholder="Enter email/mobile number" required />
                    <input className="email-input" value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Enter password" required />
                    <p > By continuing, you agree to Flipkart Clone's Terms of Use and Privacy Policy.</p>
                    <button className="login-button" onClick={Login} type="submit" >Login</button>
                    <p className="or-text">OR</p>
                    <button className="otp-button" onClick={Register} type="submit" >Register</button>
                </form>
            </div>


        </div>
        </div>
    )
}

export default Login
