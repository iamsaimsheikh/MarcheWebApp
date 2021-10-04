import React from 'react'
import Logo from '../assets/apple.svg'
import ProfilePicture from '../assets/profilepicture.jpg'
import Rating from './Rating'
import Cover from '../assets/appleCover.jpg'
import First from '../assets/appleWatch.jpg'
import Second from '../assets/appleMac.jpg'
import Third from '../assets/appleAirpod.jpeg'

function ProductInfo() {

    const product = 

        {
            _id:Math.random() * 10,
            _name:'Apple Inc',
            _tagLine:'Innovative Digital Devices',
            _userRating:4.5,
            _image:Logo,
            _desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }


    return (
        <div className="productInfoScreen">

            <div className="productDetail">
                <div className='productLogoDiv'>
                <img className='productDetailLogo' src={product._image}/>
                </div>
                <h2>{product._tagLine}</h2>
                
                <img src={ProfilePicture} style={{height:"50px",width:"50px",borderRadius:"50%"}} />
                <Rating rating={product._userRating} />
                
                <h2>About {product._name} </h2>
                <p>{product._desc}</p>

                <div className='productDetailImg'>
            <div className='productDetailCoverImg'>
                <img src={Cover} />
            </div>
            <div className='productDetailImgGrid'>
             <div>   
            <img src={Second} className='productDetailImgGridCol' />
             </div>
             <div>   
            <img src={Third} className='productDetailImgGridCol'/>
             </div>
            </div>
            </div>

            </div>
            
        </div>
    )
}

export default ProductInfo
