import React from 'react';
import {auth, provider} from '../firebase-config.js';
import { signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie';
import '../styles/Auth.css';

const cookies = new Cookies();

function Auth(props) {
    const {setIsAuth}  =  props;

const signInWithGoogle = async () => {
    try{
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    cookies.set("auth-token", result.user.refreshToken);
    setIsAuth(true);
    }catch(err){
        console.log(err);
    }
}

  return (
    <div className='auth'>
      <h1 className='hello'>Hello! Ashwin here</h1>
      <div className='auth1'>
        <h2>Welcome to Ash Chat!</h2>
        <p className='para'>All you need is a Google Account to Start the Conversation!</p>
        <button className='btnsignin' onClick={signInWithGoogle}>Sign-In With Google</button>
      </div>
    </div>
  )
}

export default Auth;