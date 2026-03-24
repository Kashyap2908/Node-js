var fs = require('fs');
function ArrayToObject(x){
    ans={}
    for (i in x){
        ans[x[i][0]]=x[i][1]
    } 
    return ans;
}
x=[['Country', 'India'], ['State', 'Gujarat'], ['City', 'Ahmedabad']]
console.log(ArrayToObject(x))
fs.writeFileSync("arraytoobject.txt",JSON.stringify(x))