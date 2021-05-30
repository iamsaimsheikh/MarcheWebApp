import React, { useState } from 'react'
import Login from '../components/login'
import SignUpScreen from '../components/signup'
import EmailSignUp from '../components/Emailsignup'
import Emailsignup from '../components/Emailsignup';
import IdeaHolderHomeScreen from './IdeaHolderHomeScreen';

function LoginScreen() {

    const [screen,setScreen] = useState('login');

    const setScreenState = (state) =>{
        setScreen(state)
    }

    
    if(screen==='login'){
        return (
            <div className='loginDivScreen'>
                <Login setScreenState={setScreenState} />
            </div>
        )
    }
    else if(screen==='signup'){
        return (
            <div className='loginDivScreen'>
                <SignUpScreen setScreenState={setScreenState} />
            </div>
        )
    }
    else if(screen==='email'){
        return (
            <div className='loginDivScreen'>
                <Emailsignup setScreenState={setScreenState} />
            </div>
        )
    }

    else if(screen==='dashboard'){
        return (
            
                <IdeaHolderHomeScreen />
            
        )
    }

    
}

export default LoginScreen
