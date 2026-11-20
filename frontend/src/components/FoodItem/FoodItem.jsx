import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { IoAdd } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { BsDash } from "react-icons/bs";
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';
const FoodItem = ({id,name,price,description,image}) => {

      
      const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={url+"/images/"+image} alt="" />
           {!cartItems[id]
           ?<IoAdd className='add' onClick={()=>addToCart(id)}/>
           :<div className='food-item-counter'>
            <BsDash  onClick={()=>removeFromCart(id)} />
            <p>{cartItems[id]}</p>
            <IoAddOutline  onClick={()=>addToCart(id)} />

           </div>
           }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
           <img src={assets.rating_starts} alt="" />
        </div>
          <p className='food-item-desc'>{description}</p>
          <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )  
}

export default FoodItem
