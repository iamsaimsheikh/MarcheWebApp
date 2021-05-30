import React, {useState} from 'react'
import Splash from '../components/splash'
import LoginScreen from './LoginScreen'

function Main() {
    const [splashState,setSplashState] = useState(true)

    setTimeout(
        () =>{ 
            setSplashState(false)
        },3000)


    if(splashState=== true){
    return (
        <Splash />
    );
    }
    else{
        return (
            <LoginScreen />
        );  
    }
}

export default Main

