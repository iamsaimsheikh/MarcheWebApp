import React, {useState , useEffect} from 'react'
import Logo from '../assets/logo.svg'
import fbLogo from "../assets/icons/facebook.svg";
import behanceLogo from "../assets/icons/behance.svg";
import dribbleLogo from "../assets/icons/dribble.svg";
import instaLogo from "../assets/icons/instagram.svg";
import linkedinLogo from "../assets/icons/linkedin.svg";
import stackoverflowLogo from "../assets/icons/stackoverflow.svg";
import ProgressBar from './ProgressBar';


function SocialAccountsInfo({setScreenState,progress,setProgress}) {

    const [socialAccounts,setSocialAccounts] = useState([{
        "facebook": null,
        "behance": null,
        "dribble": null,
        "instagram": null,
        "linkedin": null,
        "stackoverflow": null,
    }])
    

    return (
        <div className='infoDiv socialAccountsDiv emailSignUpDiv loginDiv'>
            <img src={Logo}></img>

            <ProgressBar progress={progress}/>

            <h3> Add Your Social Accounts</h3>
            

            <div className='socialAccountFieldsContainer'>
            
            <div>
                <img src={fbLogo}/>
                <input type='text' />
            </div>
            <div>
                <img src={behanceLogo}/>
                <input type='text' />
            </div>
            <div>
                <img src={dribbleLogo}/>
                <input type='text' />
            </div>
            <div>
                <img src={instaLogo}/>
                <input type='text' />
            </div>
            <div>
                <img src={linkedinLogo}/>
                <input type='text' />
            </div>
            <div>
                <img src={stackoverflowLogo}/>
                <input type='text' />
            </div>
            </div>
        
            <div className='formButton' onClick={()=>{{
                setScreenState('dashboard')
                setProgress(75)
                }}}> 
                <p className='formButtonTxt' >Complete Sign Up</p>
            </div>
        </div>
    )
}

export default SocialAccountsInfo
