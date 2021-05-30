import React,{useState} from 'react'
import DashboardIcon from '../assets/icons/dashboard-icon.svg'
import MessageIcon from '../assets/icons/message-logo.svg'
import IdeaIcon from '../assets/icons/idea-icon.svg'
import OrdersIcon from '../assets/icons/orders-icon.svg'
import UserAssistanceIcon from '../assets/icons/userAssistance-icon.svg'
import EarningIcon from '../assets/icons/earning-icon.svg'
import MarketplaceIcon from '../assets/icons/marketplace-icon.svg'

function SideNav({setTab}) {

    const [active,setActive] = useState('dashboard')


    return (
        <div className='sideNav'>
            <div style={active=='dashboard'?{borderRight:'5px solid #2d9dd8'}:null} onClick={()=>{setActive('dashboard')
        setTab('dashboard')
        }}>
            <img src={DashboardIcon} />
            </div>
            <div style={active=='marketplace'?{borderRight:'5px solid #2d9dd8'}:null} onClick={()=>{setActive('marketplace')}}>
            <img src={MarketplaceIcon} />
            </div>
            <div style={active=='message'?{borderRight:'5px solid #2d9dd8'}:null} onClick={()=>{setActive('message')
        setTab('chat')
        }}>
            <img src={MessageIcon} />
            </div>
            <div style={active=='idea'?{borderRight:'5px solid #2d9dd8'}:null} onClick={()=>{setActive('idea')}}>
            <img src={IdeaIcon} />
            </div>
            <div style={active=='orders'?{borderRight:'5px solid #2d9dd8'}:null} onClick={()=>{setActive('orders')}}>
            <img src={OrdersIcon} />
            </div>
            <div style={active=='earnings'?{borderRight:'5px solid #2d9dd8'}:null} onClick={()=>{setActive('earnings')}}>
            <img src={EarningIcon} />
            </div>
            <div style={active=='userassistance'?{borderRight:'5px solid #2d9dd8'}:null} onClick={()=>{setActive('userassistance')}}>
            <img src={UserAssistanceIcon} />
            </div>
        </div>
    )
}
 
export default SideNav
