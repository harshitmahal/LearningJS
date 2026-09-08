const name = "Harshit";
const Id = 412;

//console.log(`My name is ${name} and my id is ${Id}`);

const gameName = new String("Tekken");

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('n'));

const newGameName = gameName.substring(0,3);
//console.log(newGameName);

const anotherString = gameName.slice(0,4);
//console.log(anotherString);

const newString = "   Harshit   ";
// console.log(newString);
// console.log(newString.trim());

const url = "https://harshit.com/harshit%22mahal";
// console.log(url.replace('%22',''));

const discordName = "Harshit-123-mahal";
console.log(discordName.split('-'));
