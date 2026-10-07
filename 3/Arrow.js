const user ={
  username:"Harshit",
  price:1099,
  WecomeMessage :function (){
    console.log(`${this.username} , welcome to the website`);
    console.log(this);
    
  }
}

// user.WecomeMessage();
// user.username="Vansh";
// user.WecomeMessage();

// console.log(this);


// function game(){
//   let username = "Harshit";
//   console.log(this.username);  //output (undefined)
// };

const game = function(){
  let username = "Harshit";
  console.log(this.username);
}

const user1 = () => {
  let username = "Harshit";
  console.log(this.username);
  console.log(username);

}
// game();
// user1();


//**********************ARROW FUNCTION ********************//


// const addtwo = (num1,num2) =>{
//   return num1+num2;
// }

// console.log(addtwo(3,4));


const addtwo = (num1,num2) =>  num1+num2;
console.log(addtwo(3,4));
