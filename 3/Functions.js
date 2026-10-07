function sayMyName(){
console.log("H");
console.log("A");
console.log("R");
console.log("S");
console.log("H");
console.log("I");
console.log("T");
}

// sayMyName();


function addtwoNum(num1 , num2){
  console.log(num1 + num2);
}
//addtwoNum(3,4);

function additon(a,b){
  return (a+b);
}
const result = additon(15,10);

// console.log(`Result:${result}`);

function loginUserMessage(username){
  if(username === undefined){
    // console.log("Please enter your username");
    return;
  }

    return (`${username} logged in.`);

}
// console.log(loginUserMessage("Harshit"));

// console.log(loginUserMessage());      //undefined logged in


function shoppinCart (...num){
  return num;
}
// console.log(shoppinCart(100,300,500,600,8000));

function shoppinCart2 (val1,val2, ...num){
  return num;
}
// console.log(shoppinCart2(100,300,500,600,8000));



const user = {
  username:"Harshit",
  id:412
};

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and ID is ${anyobject.id}`);
}
// handleObject(user);

// handleObject({
//   username:"Vansh",
//   id:100
// })

const arr = [100,200,400,500];
function returnArray(getArray){
  return getArray;
}

// console.log(returnArray(arr));

// console.log(returnArray([500,100,2000]));




