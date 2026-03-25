// print josin object in web page
var http=require('http')
http.createServer(
    function(req,res){
        res.writeHead(200,{"content-type":'application/json'})
        const data={
            'subject':'fsd',
            'topic':'node js'
        }
        res.end(JSON.stringify(data));
    }
).listen(8002)