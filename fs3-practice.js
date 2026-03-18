// write node js script to write an array of object with propeties cricketer name 
// and it's number number in a file named cricketer.txt, read the file and display in console 

var fs = require('fs');
var cricketers = [
    { name: "Rohit Sharma", number: 45 },
    { name: "Sachin Tendulkar", number: 10 },
    { name: "Virat Kohli", number: 18 },
    { name: "Harbhajan Singh", number: 8 },
    { name: "Hardik Pandya", number: 33 },
    { name: "Suryakumar Yadav", number: 63 },
    { name: "Shikhar Dhawan", number: 25 },
    { name: "KL Rahul", number: 1 },
    { name: "Jasprit Bumrah", number: 93 },
    { name: "Tilak Varma", number: 72 }
]
fs.writeFileSync("cricketer.txt", JSON.stringify(cricketers))
var data = fs.readFileSync("cricketer.txt", "utf-8")
console.log(JSON.parse(data));