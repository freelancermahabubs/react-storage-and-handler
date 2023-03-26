const add = (first, second) =>{
return first + second;
}
// export default add;

const multiply = (first, second) =>{
  return first * second;
}

const percentage = (first, second) =>{
return first % second;
}

// const numbers = [54, 12, 58, 547];
// const sumReducer = (previous, current) => previous + current;
// const totalSum = numbers.reduce( sumReducer, 0)


// const itmes = [
//   {id: 1, name: 'alta', price: 100},
//   {id: 2, name: 'jalta', price: 200},
//   {id: 3, name: 'flata', price: 300},
// ];

// const itmeSum = itmes.reduce((previousItem, currentItem) => {
// return previousItem + currentItem.price
// }, 0)

// console.log(itmeSum) 

const getTotalPrice = products =>{
  const reducer = (previous, current) => previous + current.price;
  const total = products.reduce(reducer, 0);
  return total;
}

export {
  add,
   multiply,
   percentage,
   getTotalPrice as getTotal
  };