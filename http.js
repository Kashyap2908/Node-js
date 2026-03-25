/*
client(browser)
server(node js)
 */
/*
var http=require("http")
http.createServer(
    function(req,res){
        // res.writeHead(200,{"content-type":'text/plain'})
        res.writeHead(200,{"content-type":'text/html'})
        res.write('<h1>Hello<h1>')
        res.end();
    }
).listen(8002)
*/
var http=require("http")
var fs=require('fs')
http.createServer(
    function(req,res){
        res.writeHead(200,{"content-type":'text/html'})
        res.write(req.url)
        res.end();
    }
).listen(8002)