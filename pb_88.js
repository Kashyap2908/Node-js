division1={
    a: [2,2,2,2,2]
}
division2={
    a: [1,2,3,4,5]
}
var fs=require('fs')
fs.writeFileSync("xyz.txt","division1: "+JSON.stringify(division1)+'\n'+"division2: "+JSON.stringify(division2))
result={a:[0,0,0,0,0]}
for(let i=0;i<5;i++){
    result.a[i]=Math.pow(division1.a[i].division2.a[i])
}
console.log(result)