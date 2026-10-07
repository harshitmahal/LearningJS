//  Immediately Invoked Function Expression(IIFE)

(function chai() {              //NAMED IIFE
  console.log("DB Connected") 
})
();

(() => {                          //SIMPLE OR ANONYMOUS IIFE`
  console.log("DB Connected 2");
})
();

((name)=>{
  console.log(`My name is ${name}`);
}
)("Harshit Mahal");