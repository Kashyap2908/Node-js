// create http web page on which home page display welcome to login page in blue color and font size must be 32px login page shows
// one html file from static url having form with detail for user name, password, submit and reset button,gallery page reflect an
// image hello.jpg and any other page shows Page not found

var u=require('url')
var fs=require('fs')
var http=require('http')
const { text } = require('stream/consumers')
process.noDeprecation=true
http.createServer(
    function(req,res){
        if(req.url==="/"){
            res.writeHead(200,{'content-type':"text/html"})
            data=`<h1 style="color=blue ; font-size=32px">Welcome To Login page</h1>`
            res.end(data)
        }else if(req.url==="/login.html"){
            q=u.parse(req.url,true)
            fname=q.pathname.split('/')[1]
            data=fs.readFile(fname,(err)=>{
                res.writeHead(200,{'content-type':"text/html"})
                res.end(data)
            })
        }else if(req.url==="/gallery"){
            data=fs.readFile("Flower.png",(err)=>{
                res.writeHead(200,{'content-type':"image/png"})
                res.end(data)
            })
        }
    }
).listen(8002,()=>{
    console.log("server is running")
})