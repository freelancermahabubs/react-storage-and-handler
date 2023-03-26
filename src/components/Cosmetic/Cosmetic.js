import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css';


const Cosmetic = (props) => {
const {id, name, price} = props.cosmetic;
const addToCart = (id) =>{
  addToDb(id)
};

const removeFromCart = (id) =>{
  removeFromDb(id)
}

// const addToCartWithPara = () => addToCart(id)
  return (
        <div className='product'>
      <h1>This is Cosmetic Store</h1>
      <h2>Buy this : {name}</h2>
      <p>Only For: $ {price}</p>
      <p><small>It has id: {id}</small></p>

      {/* <button onClick={addToCartWithPara} className='btn btn-warning mt-4'>Add to Cart</button> */}
    <div className='flex gap-x-2 justify-center'>
    <button onClick={()=> addToCart(id)} className='btn btn-warning mt-4'>Add to Cart</button>
    <button onClick={()=> removeFromCart(id)} className='btn btn-error mt-4'>Remove</button>
  
    </div>
    </div>
    
  );
};

export default Cosmetic;