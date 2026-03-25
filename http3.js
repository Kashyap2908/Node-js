// create one page with 2 links 
// 1. /home
// 2. /about
// both pages must contain relevent html type content, if user add any other url path then it will be
// redirected to the page which shows plain message Page not found

var http=require('http')
http.createServer(
    function(req,res){
        if (req.url==='/home' | req.url==='/'){
            res.writeHead(202,{"content-type":'text/html'})
            res.end("<h1>Home Page<h1>")
        }else if(req.url==='/about'){
            res.writeHead(202,{"content-type":'text/html'})
            res.end("<h1>About Page<h1>")
        }else{
            res.writeHead(404,{"content-type":'text/plain'})
            res.end("Page Not Found")
        }
    }
).listen(8004)