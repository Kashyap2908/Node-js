// write node js script to perform below tasks
// 1. write below object in f2.txt file
//      {d:{a:10, b:20, c:[30,10]}}
// 2. read data from tghe same file and perform following tasks
//     - calculate sum of a and b
//     - calculate subtraction of second element of c and b(must be +ve number)
//     - calculate multiplication of elements of c
// 3. add the output of addition, subtraction and multiplication in the same file
var fs = require('fs');
var obj = { d: { a: 10, b: 20, c: [30, 10] } }
fs.writeFileSync("f2.txt", JSON.stringify(obj) + "\n");
var data=JSON.parse(fs.readFileSync("f2.txt", "utf-8"));
var sum=data.d.a+data.d.b;
var sub=Math.abs(data.d.c[1]-data.d.b);
var mul=data.d.c[0]*data.d.c[1];
fs.appendFileSync("f2.txt","Sum of a and b: " + sum + "\n" + "Subtraction of second element of c and b: " + sub + "\n" + "Multiplication of elements of c: " + mul);
