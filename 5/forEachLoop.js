const programming = ["js" , "ruby" , "python" , "java"];

programming.forEach(function (val){
  // console.log(val);
})

programming.forEach((item)=>{
  // console.log(item);
})

// programming.forEach(printMe)

programming.forEach( (item, index, arr)=> {
  // console.log(item, index, arr);
})

const myCoding=[
  {
    UserName:"Harshit",
    languageName:"Javascript"
  },
  {
    UserName:"Vansh",
    languageName:"Java"
  },
  {
    UserName:"Vanshika",
    languageName:"Python"
  }
];

myCoding.forEach((item)=>{
  console.log(item.UserName);
})