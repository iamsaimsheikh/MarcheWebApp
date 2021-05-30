import React from 'react'
import Logo from '../assets/logo.svg'
import GLogo from '../assets/googleLogo.svg'

function signup({setScreenState}) {
    return (
        <div className='loginDiv signUpDiv'>
            <img src={Logo}></img>
            <button> <div className='btnIconDiv firstIconDiv'> <img src={GLogo}></img> </div>  Sign Up With Gmail  </button>
            
            <div className="hr"> <hr/> OR <hr/> </div>
            <h3  className='formLink'>Sign Up Using Email?</h3>
            <label class="wrapper">
            <input type="text" class="textfield" name="name" placeholder=" " />
            <span class="placeholder">Email</span>
            </label>
            <div className='formButton' onClick={()=>{setScreenState('email')}}> 
                <p className='formButtonTxt' >Sign Up Using Email</p>
            </div>
        </div>
    )
}

export default signup
