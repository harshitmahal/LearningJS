let userOne = {
  email:"user@gmail.com",
  Id:"1002"
};

//shallow copy
//let userTwo = {...userOne};

let userTwo = userOne;



userTwo.email = "Harshit@gmail.com";

console.log(userOne.email); 
console.log(userTwo.email); 

