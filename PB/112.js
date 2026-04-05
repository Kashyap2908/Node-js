/*
Write node js script to fetch values from url given below and display output as asked.
"https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=Welcome+to+LJU#AllTheBest"
1) Data must be written as below in file named “exam.txt”. File name must be fetched from
the url given above.
Output:
Hello!
Welcome to LJU FSD2 T1 Test
#AllTheBest
2) Read content from file “exam.txt” and send response to server and display data in “/” page
in same format as above but in H1 tag and in red color.
3) If any other page is requested it shows “Page not found” message in plain text.
*/

var addr="https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=Welcome+to+LJU#AllTheBest"
let fs=require('fs');
let url=require('url')
let h=require("http")
process.noDeprecation=true

const u=url.parse(addr,true);
fname="."+u.pathname
// console.log(u)
content=u.query.c1+"<br>"+u.query["amp;c3"]+"<br>"+u.query["amp;c2"]+"<br>"+u.hash
fs.writeFileSync(fname,content)
data=fs.readFileSync(fname,"utf-8")
h.createServer(function(req,res){
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1 style='color:red'>"+content+"</h1>")
        res.end()
    }else{
        res.writeHead(404,{"content-type":"text/plain"})
        res.end("Page Not Found!")
    }
}).listen(8005)






/*
const http = require("http"); 
const fs = require("fs"); 
const url = require("url"); 
 
const url1 = 
"https://www.google.com/exam1.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest"; 
 
const parsedUrl = url.parse(url1,true); 
console.log(parsedUrl.pathname) 
process.noDeprecation=true
 
const c1 = parsedUrl.query.c1; 
const c2 = parsedUrl.query.c2; 
const c3 =  parsedUrl.query.c3; 
const hash =  parsedUrl.hash; 
const filename = "."+parsedUrl.pathname 
 
const fileContent = c1+"!\n"+c3+" "+c2+"\n"+hash;
console.log(fileContent)
*/