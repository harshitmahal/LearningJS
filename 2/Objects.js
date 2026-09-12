const mySym = Symbol("key1");

const User1 ={
  name: "Harshit",
  "full Name":"Harshit Mahal",
  [mySym]:"myKey1",
  age:22,
  email:"harshit@google.com",
  nationality:"Indian",
}
// console.log(User1.name);
// console.log(User1["email"]);
// console.log(User1["full Name"]);

// console.log(User1[mySym]);
// console.log(typeof User1[mySym]);
// console.log(typeof mySym);


User1.email = "harshit@gaming.com";
// Object.freeze(User1);
User1.email = "harshit@microsoft.com";

// console.log(User1);

User1.greeting = function(){
  console.log("Hello User 1");
}

User1.greetingTwo = function(){
  console.log(`Hello ${this.name}`);

}
console.log(User1.greeting());
console.log(User1.greetingTwo());











