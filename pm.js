// Path Module
var pm=require("path")

// file name
path=pm.basename("D:/Sem-4/Node/fs6-practice.js");
console.log(path);
console.log()

// directory path
path1=pm.dirname("D:/Sem-4/Node/fs6-practice.js");
console.log(path1);
console.log()

// extention
ext=pm.extname("D:/Sem-4/Node/fs6-practice.js");
console.log(ext);
console.log()

// parse
path2=pm.parse("D:/Sem-4/Node/fs6-practice.js");
console.log(path2);
console.log()

console.log(path2.name)
