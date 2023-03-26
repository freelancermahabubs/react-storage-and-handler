// use localStorage to mange cat data 

const addToDb = id =>{
  let shoppingCart = {};

  // get the shoppingCart from local Storage

  const storedCart = localStorage.getItem('shopping-cart');
  if(storedCart){
    shoppingCart = JSON.parse(storedCart);
  }


  // add quantity
  const quantity  = shoppingCart[id];
  if(quantity){
    const newQuantity =  quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  else{
    shoppingCart[id] = 1;
    
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
};

const removeFromDb  = id =>{
  const storedCart = localStorage.getItem('shopping-cart');
  if(storedCart){
    const shoppingCart = JSON.parse(storedCart)
    if(id in shoppingCart){
     delete shoppingCart[id];
     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
  }
};

const deleteShoppingCart = () =>{
  localStorage.removeItem('shopping-cart')
}

export {addToDb,
   removeFromDb,
   deleteShoppingCart
  };