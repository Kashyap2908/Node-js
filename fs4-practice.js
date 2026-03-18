// Create a JSON object which contains array of objects ,
// calculate parameter of square and  circle using side value and diameter value respectively ,
// write object as well as parameter value in shape.txt file and read the file
data= [
    {"name": "square", "side": 5},
    {"name": "circle", "diameter": 10}
]
var fs = require('fs');
fs.writeFileSync("shape.txt", JSON.stringify(data) + "\n");
shape=JSON.parse(fs.readFileSync("shape.txt", "utf-8"));
var sp=shape[0].side*4;
var cp=shape[1].diameter*Math.PI;
fs.appendFileSync("shape.txt", "Parameter of square: " + sp + "\n" + "Parameter of Circle: "+ cp);