import React,{useState} from 'react'
import Logo from '../assets/logo.svg'
import ProfilePicture from '../assets/profilepicture.jpg'
import NotificationIcon from '../assets/icons/notificationIcon.svg'

function TopNav() {

    const [active,setActive] = useState('dashboard')


    return (
        <div className='topNav'>

            <div className='logoDiv'>
            <img src={Logo} className='logo'/>
            </div>

            <div className='profilePictureDiv'>
            <img src={NotificationIcon} className='notificationIcon'></img>
            <button>$80</button>
            <img src={ProfilePicture} className='profilePicture' />
            </div>

        </div>
    )
}
 
export default TopNav