import React, { useState } from 'react'
import Login from '../components/login'
import SignUpScreen from '../components/signup'
import EmailSignUp from '../components/Emailsignup'
import Emailsignup from '../components/Emailsignup';
import IdeaHolderHomeScreen from './IdeaHolderHomeScreen';
import UserInformation from '../components/UserInformation';
import SocialAccountsInfo from '../components/SocialAccountsInfo';

function LoginScreen() {

    const [screen,setScreen] = useState('login');
    const [progress,setProgress] = useState(25)
    const [profilePicture,setProfilePicture] = useState(null)

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
                <Emailsignup setScreenState={setScreenState} progress={progress} setProgress={setProgress}/>
            </div>
        )
    }

    else if(screen==='dashboard'){
        return (
            
                <IdeaHolderHomeScreen profilePicture={profilePicture} />
            
        )
    }

    else if(screen==='userinfo'){
        return (
            
                <div className='loginDivScreen'>
                    <UserInformation setScreenState={setScreenState} progress={progress}
                     setProgress={setProgress} profilePictureProp={setProfilePicture}/>
                </div>
            
        )
    }

    else if(screen==='socialaccountsinfo'){
        return (
            
                <div className='loginDivScreen'>
                    <SocialAccountsInfo setScreenState={setScreenState}  progress={progress} setProgress={setProgress}/>
                </div>
            
        )
    }

    
}

export default LoginScreen
