//to work with path module, you need a file or a folder 

//USE: helps to work with paths of specific files and subfolders

//import path
const path = require('path')

//1. get extension of a file
let ext = path.extname('D:\Projects\Web Dev\ScalerCourse\NodeModuleSystems\file1.txt');
console.log(ext)

//2. get filename from the path
let filename = path.basename('D:\\Projects\\Web Dev\\ScalerCourse\\NodeModuleSystems\\file1.txt');
console.log(filename)

//3. print the path of current file
console.log(__filename)

console.log(__dirname)

