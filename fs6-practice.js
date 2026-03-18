var fs=require('fs');
fs.mkdirSync("FSD");
fs.writeFileSync("FSD/hello.txt","Hello, Good Night!");
fs.rmdirSync("FSD");