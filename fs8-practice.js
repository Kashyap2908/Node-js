// write a node js program to create file named exam.txt containing the initial text "Exam attempt". 
// Then it should add 3 more lines 
// "Entry 1: Pass"
// "Entry 2: Fail"
// "Entry 3: Pass"
// After writing the prgram must read the file and count how many time the word pass appear and 
// If the word pass apears 3 or more times the program should erase the content inside exam.txt

var fs=require('fs');
fs.writeFileSync("exam.txt","Exam attempt\n");
fs.appendFileSync("exam.txt","Entry 1: Pass\n");
fs.appendFileSync("exam.txt","Entry 2: Fail\n");
fs.appendFileSync("exam.txt","Entry 3: Pass\n");
var data=fs.readFileSync("exam.txt", "utf-8");
let count=0;

for (i in data.split(" ")){
    if (data.split(" ")[i] === "Pass") {
        count++;
    }
}
if (count >= 3) {
    fs.writeFileSync("exam.txt", "");
}