
const fs = require('fs');

//fs.readFile('file.txt', 'utf8' , (err , data)=>{
    //console.log(err, data)
//}) 
// const a= fs.readFileSync('file.txt')
console.log(a.toString())  // this will print the content of the file
fs.writeFile('file1.txt' , "This is the content in the file", ()=>{
    console.log("File created")
});

console.log("finished reading file ")

