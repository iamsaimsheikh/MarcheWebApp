import React from 'react'
import Rating from '../components/Rating'
import Logo from '../assets/logo.svg'
import ProfilePicture from '../assets/profilepicture.jpg'
import {useState} from 'react'


function Products(props) {
    
    

    const products = [

            {
                _id:Math.random() * 10,
                _name:'Apple Inc',
                _tagLine:'Innovative Digital Devices',
                _userRating:4.5,
                _image:Logo,
            },

            {
                _id:Math.random() * 10,
                _name:'Marche',
                _tagLine:'Platform for digital products!',
                _userRating:4.5,
                _image:Logo,
            }
    ]


    return (
        <>
     
       {
        
        products.map(product => (product._name.toLowerCase()).includes(props.searchText.toLowerCase()) ?
            
        <div className='productCard' onClick={()=>{
            props.setSelectedProduct(product)
            props.setSelected(true)
        }}>
        <div  className='productImage'>
        <img src={product._image}/>
        </div>
        <div className='productInfo'>   
        <h1>{product._name}</h1>
        <h2>"{product._tagLine}"</h2>
        </div>
        <div className='productOwnerInfo'>
        <img src={ProfilePicture} className='ppicture' />
        <Rating rating={product._userRating} />
        </div>
        </div> : console.log(props.searchText)  )

       
       
}
       
            
        

        

       
       
       
       </>
    )
}

export default Products
