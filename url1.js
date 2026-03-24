var u=require("url")
addr="https://localhost:8080/default.html?year=2025&month=march"
q=u.parse(addr,true)
process.noDeprecation=true
console.log(q)
qdata=q.query
console.log(qdata.year)
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'localhost:8080',
  port: '8080',
  hostname: 'localhost',
  hash: null,
  search: '?year=2025&month=march',
  query: [Object: null prototype] { year: '2025', month: 'march' },
  pathname: '/default.html',
  path: '/default.html?year=2025&month=march',
  href: 'https://localhost:8080/default.html?year=2025&month=march'
}
2025
*/

//leap year
y=qdata.year
// y=2024
if((y%400==0) || (y%4==0 && y%100!=0)){
    console.log("Year is leap year")
}else{
    console.log("Not leap year")
}