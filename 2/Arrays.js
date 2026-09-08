const myArr = [1,2,3,4,5];

const newArr = new Array(10,20,30,40);
//console.log(newArr[3]);

//->Array Methods

// myArr.push(10);
// myArr.push(12);
// myArr.pop();
// console.log(myArr);


// myArr.unshift(9);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(2));

console.log("A",myArr);

const newArray = myArr.slice(1,3);
console.log(newArray);

console.log("B",myArr);

const newArray2 = myArr.splice(1,3);
//splice changes the original array and returns the removed elements
console.log("C",myArr);
console.log(newArray2);
  






