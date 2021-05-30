import React from 'react'
import Logo from '../assets/logo.svg'
import '../assets/style.css'

function splash() {
    return (
        <div className='splashScreen'>
             <div className='splashDiv'> 
                <div className='splashAnimatedDiv'> </div>
                <img src={Logo} className='logo'/>
            </div>
        </div>
    )
}

export default splash
