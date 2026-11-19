for(let i = 0; i <=10; i++){
  let element = i;
  if(element == 5){
    // console.log("5 is good number");
  }
  // console.log(element);
  
}

for(let i = 0;i <= 10; i++){
  // console.log(`Outer loop value : ${i}`);
  for(let j = 0 ;j<=10;j++){
    // console.log(`Inner loop value : ${j} and Inner loop ${i}`);
  }
}

let myArray = ["Flash","Batman","Superman"];
for (let i = 0; i < myArray.length; i++) {
    let element = myArray[i];
    // console.log(element);
}


for (let i = 1; i < 20; i++) {
  if(i == 5){
    // console.log("5 detected");
    break;
  }
  // console.log(`value of i is ${i}`);
}

for (let i = 1; i < 20; i++) {
  if(i == 5){
    console.log("5 detected");
    continue;
  }
  console.log(`value of i is ${i}`);
}