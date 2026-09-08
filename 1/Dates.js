let myDate = new Date();
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleString());

 let myBirthDate = new Date(2004,8,10);
 let myBirthDate2 = new Date(2004,8,10,13,35);

//  console.log(myBirthDate.toDateString());
//  console.log(myBirthDate2.toLocaleString());

let myCreatedDate = new Date("10-09-2004");
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//console.log(Math.round(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(`Today's Date is ${newDate.toLocaleString()} and the month is ${newDate.getMonth() + 1} and the day is ${newDate.getDay()}`);




 



 