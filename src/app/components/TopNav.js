import React,{useEffect, useState} from 'react'
import Logo from '../assets/logo.svg'

import NotificationIcon from '../assets/icons/notificationIcon.svg'

function TopNav({profilePicture,sidebarActive,setSidebarActive}) {

    const [active,setActive] = useState('dashboard')

    useEffect(() => {
        setSidebarActive(sidebarActive)
    }, [sidebarActive])


    return (
        <div className={sidebarActive === false ? 'topNav' : 'displayNull'}>

            <div className='logoDiv'  >
            <div className='burger-nav' >
                <div className='burger-nav-icon' onClick={()=>{
                    setSidebarActive(true)
                    console.log(sidebarActive)
                }} >
                ≡
                </div>
                <div className='burger-nav-links'>
                </div>
            </div>
            <img src={Logo}  className='logo'/>
            </div>

            <div className='profilePictureDiv'>
            <img src={NotificationIcon} className='notificationIcon'></img>
            <button>$80</button>
            <img src={profilePicture} className='profilePicture' />
            </div>

        </div>
    )
}
 
export default TopNav
