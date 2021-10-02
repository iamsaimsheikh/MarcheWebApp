import React, {useState , useEffect} from 'react'
import Logo from '../assets/logo.svg'
import GLogo from '../assets/googleLogo.svg'
import ProfilePicture from '../assets/setProfilePicture.jpeg'
import ProgressBar from './ProgressBar'


function UserInformation({setScreenState,progress,setProgress,profilePictureProp}) {
    const [keyword,setKeyword] = useState({
       'data': ["TECH","IT","MACHINES","GAMES","REAL ESTATE","INVESTMENT","CRYPTO","CYBER","ETHER"]
    });

    const [selected,setSelected] = useState([])
    const [picture,setProfilePicture] = useState(null)

    const addToSelected = (keyword) => {
        if(selected.length  < 5){
        setSelected(oldarray => {
          return  [...oldarray,keyword]
        });
    }
    }

    const removeFromSelected = (tag) => {
        if(selected.includes(tag)){
           setSelected(selected.filter(item => item !== tag))
        }
    }

    const getFile = (event) => {
        setProfilePicture(URL.createObjectURL(event.target.files[0]))
    }

    useEffect(() => {
        setSelected(selected)
        console.log(selected)
    }, [selected])

    return (
        <div  className='loginDiv signUpDiv infoDiv'>
            <h1> Personal Info</h1>
            <ProgressBar progress={progress}/>
           <div className='profilePictureDivSignup'> <img src={picture}></img> </div>
            
           <label> Enter Your File
        <input type="file" size="60" onChange={event => getFile(event)} />
        </label> 
        
            <h2  className='formLink'>Choose 5 Interests!  *</h2>
            <div className='keywordDivContainer'> {

            keyword.data.map(keyword =>{
                if (selected.includes(keyword)){
                    return  <div className='keywordDiv keywordSelected' onClick={()=>removeFromSelected(keyword)}> {keyword} </div>    
                }
                else{
                return  <div className='keywordDiv' onClick={()=>addToSelected(keyword)}> {keyword} </div>
                }
            })
             } 
            
            
            </div>
            <div className='formButton' onClick={()=>{{
                setScreenState('socialaccountsinfo')
                setProgress(75)
                profilePictureProp(picture)
                }}}> 
                <p className='formButtonTxt' >Next</p>
            </div>
        </div>
    )
}

export default UserInformation
