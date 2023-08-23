//child process is a node module that is use to create the subprocess within the a script
//you can perform different tasks with your script by just using some methods

//For eg: opening a cmd and typing calc i.e using script you can perform a subprocess

// ------------------------------------------------------------------------------------
const cp = require('child_process');
//m open calc
//cp.execSync('calc');    //execute synchronously

//---open brave browser
//cp.execSync('start brave https://www.javascripttutorial.net/javascript-factory-functions/')

//---open a file using child process
console.log('output ' + cp.execSync('node demo.js'));

