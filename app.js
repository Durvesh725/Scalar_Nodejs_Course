//import module - MODULARIZATION CONCEPT
const calculator = require('./calculator')

calculator.add(4, 2);


// ----------------------------------------------------------------------------------------------------------------------------------
// GLOBAL OBJECT DEMO
console.log('Hello world')

//Window: it is global object for Javascript 
// The global object of JavaScript in the web browser is the window object.
// It means that all variables and functions declared globally with the var keyword become the properties and methods of the window

//---there is not window object in node js
// console.log(window);

//instead, we have global object in the node js
// console.log(global);

// let name = 'Durvesh'
// console.log(global.name)
// ---------------------------------------------------------------------------------------------------------------------------------