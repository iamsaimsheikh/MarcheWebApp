import React from 'react'
import Logo from '../assets/logo.svg'
import GLogo from '../assets/googleLogo.svg'
import FLogo from '../assets/facebookLogo.svg'

function login({setScreenState}) {


    return (
        <div className='loginDiv'>
            <img src={Logo}></img>
            <button> <div className='btnIconDiv firstIconDiv'> <img src={GLogo}></img> </div>  Login With Gmail  </button>
            <button> <div className='btnIconDiv secondIconDiv'> <img src={FLogo}></img> </div> Login With Facebook </button>
            <div className="hr"> <hr/> OR <hr/> </div>
            <label class="wrapper">
            <input type="text" class="textfield" name="name" placeholder=" " />
            <span class="placeholder">Email</span>
            </label>
            <label class="wrapper">
            <input type="password" class="textfield" name="name" placeholder=" " />
            <span class="placeholder">Password</span>
            </label> 
            <div className='formButton' onClick={() => setScreenState('dashboard')}>
                <p className='formButtonTxt'>Log in</p>
            </div>
           <p  className='formLink'>Don't have an Marché account? <a onClick={() => setScreenState('signup')}>Sign Up</a></p>
        </div>
    )
}

export default login
