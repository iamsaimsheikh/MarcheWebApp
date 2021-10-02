import React, {useState,useEffect} from 'react'
import SearchIcon from '../assets/icons/searchIcon.svg'
import Products from './Products';
import ProductInfo from './ProductInfo';


function Marketplace() {

    const [searchText,setSearchText] = useState("");
    const [selectedProduct,setSelectedProduct]= useState(null);
    const [productSelected,setSelected] = useState(false);

    useEffect(() => {
        setSearchText(searchText)
    }, [searchText])


   

    return (

        <>

        {

            productSelected === true ?  <ProductInfo /> :

        <div className='marketplaceScreen'>
            <div className='marketplace'>
                <div className='searchBar'>
                    <div className='searchIcon'>
                    <img src={SearchIcon} />
                    
                    </div>
                    <div className='searchText'>
                        <input type='text' placeholder='Search Marche Marketplace' value={searchText} onChange={ e => setSearchText(e.target.value)}/>
                    </div>
                </div>
                { searchText === '' ?
                <h3>Recommended For You</h3>
                : <h3>Your Search Results</h3>
                }
                <div className='recommendationGrid'>
                 <Products searchText={searchText} setSelectedProduct={setSelectedProduct} setSelected={setSelected}/> 
                </div>

                </div>
        </div>

            }
        </>
    )
}

export default Marketplace
