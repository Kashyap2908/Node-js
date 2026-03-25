// write node js script to fetch values from url and display as asked
// data must be written in file exam.txt
// file name must be fetched from url
// output:
/*
Hello!
Welcome to LJU FSD2 T1 Test
#All The Best
*/
// read the content from file and send responce to server and display data in "/" page in same formate in h1 tag and red color
// if any other page is requested it shows page not found in plane text
var u=require('url')
var fs=require('fs')
var http=require('http')
q=u.parse("https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU #All The Best",true)
process.noDeprecation=true
fname=q.pathname.split('/')[3]
data=q.query.c1+"\n"+q.query.c3+" "+q.query.c2+"\n"+q.hash.split('%20').join()
fs.writeFileSync(fname,data)
d=fs.readFileSync(fname,'utf-8')
http.createServer(
    function(req,res){
        if(req.url==='/'){
            res.writeHead(200,{'content-type':'text/html'})
            res.write("<h1 style='color:red'>"+d+"</h1>")
            res.end()
        }else{
            res.writeHead(404,{'content-type':'text/plain'})
            res.end("Page Not Found")
        }
    }
).listen(8005)