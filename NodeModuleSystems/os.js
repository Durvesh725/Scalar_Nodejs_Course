//import os module
const os = require('os')

//get architecture
console.log(os.arch())

//get platform
console.log(os.platform())

//get network details
console.log(os.networkInterfaces())

//get CPU details
console.log("CPU Details: ")
console.log(os.cpus());

console.log(os.totalmem())

console.log(os.freemem())

console.log(typeof(os.cpus()))

//---APPLICATION: websites that runs the system checks for checking compabilities eg. game sites


