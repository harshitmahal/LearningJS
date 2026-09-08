const marvel_hero = ["Thor" , "Spiderman", "Ironman"];

const disney_hero = ["Mickey Mouse", "Donald Duck", "Goofy"];

//marvel_hero.push(disney_hero);

// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);

// const new_hero = marvel_hero.concat(disney_hero);
// console.log(new_hero);

const allHeros = [...marvel_hero, ...disney_hero];
// console.log(allHeros);

const myArray = [1,2,3,[4,5,6],7,[8,[9,10]]];
const simpleArray = myArray.flat(Infinity);
// console.log(simpleArray);

console.log(Array.isArray("Harshit"));
console.log(Array.from("Harshit"));


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));


