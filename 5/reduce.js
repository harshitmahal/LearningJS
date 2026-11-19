const numbers = [1, 2, 3];

// const newNum = numbers.reduce(function(accumulator , currentValue){
//   console.log(`accumulator:${accumulator} and currentValue:${currentValue}`);
  
//   return accumulator+currentValue;
// },0);

const newNum = numbers.reduce((acc,currVal)=>acc + currVal ,0)
// console.log(newNum);


const ShoppingCart = [
  {
    CourseName:"Java",
    price:700
  },
  {
    CourseName:"JavaScript",
    price:600
  },
  {
    CourseName:"Python",
    price:1000
  }
];

let myCartTotal = ShoppingCart.reduce((accumulator, cart) => 
  { return (accumulator + cart.price ) },0);

console.log(`total price is ${myCartTotal}`);
                  