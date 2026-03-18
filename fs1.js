//  ## File System Module
//     - create a directory
//     - read
//     - delete
//     - write
//     - append
//     - rename
//     - copy
//     - remove directory
var fs = require('fs');

// create a directory
// fs.mkdirSync("node")

// write a file
// fs.writeFile(path, data, options, callback)
// fs.writeFileSync("node/hello.txt","Hello, Good Night!")

// overwrite the file
// fs.writeFileSync("node/hello.txt","Hello, Good Morning!");

// append to the file
// fs.appendFile(path, data, callback);
// fs.appendFileSync("node/hello.txt"," Have a nice day!");

// read the file
// fs.readFile(path, options, callback);
// read the file without encoding or using toString() method
// var data = fs.readFileSync("node/hello.txt");
// console.log(data);

// read the file using toString() method
// var data = fs.readFileSync("node/hello.txt");
// console.log(data.toString());

// read the file using encoding
// var data = fs.readFileSync("node/hello.txt", "utf-8");
// console.log(data);

// rename the file
// fs.renameSync("node/hello.txt", "node/greeting.txt");

// delete the file
// fs.unlink(path, callback);
// fs.unlinkSync("node/greeting.txt");

// remove the directory
// fs.rmdirSync("node");