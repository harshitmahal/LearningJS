const arr=[1, 2, 3, 4, 5];

for (const nums of arr) {
  // console.log(nums);
}

const greeting = "Hello Harshit";
for(const greet of greeting){
  // console.log(`Each char is ${greet}`);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")

// console.log(map);

for(const [key,value] of map){
  // console.log(key);
  //  console.log(value);
  // console.log(key,':-',value);
}


////////////////  FOR IN  //////////////

const myObject ={
  js:"JavaScript",
  cpp:"C++",
  rb:"Ruby",
}
for (const key in myObject) {
  // console.log(`${key} is shortcut for ${myObject[key]}`); 
}

const programming = ["js" , "ruby" , "python" , "java"];

for (const key in programming){
  // console.log(key);
  console.log(programming[key]);
}