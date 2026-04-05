/*
Write a script to define two JSON objects named as “division1” and 
“division2” having an array to store 5 integer numbers. Write this 
object in a file named XYZ.txt using file system. Define third array  
as result which gives output as explained below: Suppose first array 
contains base value and second array contains power value and then 
third array will give output as: a^b.For example: first array[0]=2 and 
second array[0]=3 then it should return 8 in third array[0] .Also 
append this result in XYZ.txt and as well as on console.
 */

let division1={
    base:[2,2,2,2,2]
}
let division2={
    pw:[1,2,3,4,5]
}
var fs=require('fs')
fs.writeFileSync("XYZ.txt","division1: "+JSON.stringify(division1)+"\n"+"division2: "+JSON.stringify(division2)+"\n")
let result={
    p:[0,0,0,0,0]
}
for (let i=0;i<5;i++){
    result.p[i]=Math.pow(division1.base[i],division2.pw[i])
}
fs.appendFileSync("XYZ.txt","result :"+JSON.stringify(result))
console.log(result)