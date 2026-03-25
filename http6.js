var u=require('url')
var fs=require('fs')
var http=require('http')
process.noDeprecation=true
http.createServer(
    function(req,res){
        fname="."+(req.url==="/"? "about.html":"req.url")
        data=fs.readFile("."+fname,function(err,data){
            if(err){
                res.writeHead(404,{"content-type":"text/plain"})
                res.end("Page not found")
            }else{
                res.writeHead(200,{'content-type':"text/html"})
                res.end(data)
            }
        })
    }
).listen(8005)