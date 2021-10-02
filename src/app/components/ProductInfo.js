import React from 'react'
import Logo from '../assets/logo.svg'
import ProfilePicture from '../assets/profilepicture.jpg'
import Rating from './Rating'

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
                <img src={product._image}/>
                <h2>{product._tagLine}</h2>
                <Rating rating={product._userRating} />
                <h2>About {product._name} </h2>
                <p>{product._desc}</p>
            </div>

            <div className="productDisplay">

            </div>
            
        </div>
    )
}

export default ProductInfo
