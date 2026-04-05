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