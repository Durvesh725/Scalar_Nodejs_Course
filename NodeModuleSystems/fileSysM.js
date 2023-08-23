//FILE SYSTEM MODULE

//PART-1 FILES
const fs = require('fs')


//1. Reading file contents
//readFileSync is an asynchronous method
let fileContent = fs.readFileSync('file1.txt');
console.log("Contents of file1: " +fileContent);

//2. Writing to a file (file2.txt)
//if file doesnt exists, it creates a new file
fs.writeFileSync('file2.txt', 'Contents is overwritten')

// //3. Append to a file
// fs.appendFileSync('file2.txt', 'This is appended data')
// console.log('data appended succesfully')


//4. Deleting a file
// fs.unlinkSync('file2.txt')
// console.log('File has been deleted')
// -------------------------------------------------------------------------------------------------------------------------------


//---WORKING WITH DIRECTORIES
//fs.mkdirSync('myDirectory')

//1.read contents of the directory
let path = "D:\\Projects\\Web Dev\\ScalerCourse\\NodeModuleSystems\\myDirectory"

console.log(fs.readdirSync(path))

//2. check if the directory/file exists or not
console.log(fs.existsSync('myDirector'))

//3. delete a directory
//below methods throws a error if the directory is empty
fs.rmdirSync('myDirectory')
console.log('Directory has been deleted')

