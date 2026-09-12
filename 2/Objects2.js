const myUser = {};

myUser.id = "412hm";
myUser.age = 22;
myUser.name = "Vansh";

// console.log(myUser);

const randomUser = {
  email:"user@gmail.com",
  name:{
    userFullName:{
        firstName:"Harshit",
        lastName:"Mahal"
    }
  },
  age:22
}
// console.log(randomUser.name.userFullName.lastName);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

//const obj3 = Object.assign(obj1,obj2);
const obj3 = {...obj1 , ...obj2};
// console.log(obj3);


// console.log(myUser);

// console.log(Object.keys(myUser));
// console.log(Object.values(myUser));
// console.log(Object.entries(myUser));

// console.log(myUser.hasOwnProperty("name"));


/////OBJECT DE-STRUCTURE/////

const course = {

  courseName :"JavaScript",
  coursePrice : 999,
  courseInstructor : "Hitesh"

}

const {courseInstructor : Instructor} = course;
console.log(Instructor);










