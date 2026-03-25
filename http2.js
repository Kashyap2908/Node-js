// Image
var http=require('http')
var fs=require('fs')
http.createServer(
    function(req,res){
        if(req.url==='/'){
            res.writeHead(200,{'content-type':'image/html'})
            res.end("<h1>Photo<h1>"+
                "<img src='Flower.png'/>")
        }else if(req.url==='/Flower.png'){
            img=fs.readFileSync('Flower.png')
            res.writeHead(200,{'content-type':'image/png'})
            res.end(img)
        }
    }
).listen(8003)