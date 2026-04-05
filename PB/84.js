/*
Write a node.js script using Event handling to perform following 
tasks in sequence:
a) Create file in it named abc.txt and enter data into it.
b) Append data to that file abc.txt and print message “Data Appended 
Successfully”.
c) Read the content of the file abc.txt and print the content on http 
web server.
d) Do all the operations of File using asynchronous file system 
module. And Lastly print the message “All operations performed 
successfully” on console.
*/

var fs=require('fs')
var e=require("events")
var e1=new e();
var http=require('http')

e1.on("createfile",()=>{
    fs.writeFile("abc.txt","Hello, I'm Kashyap!",(err)=>{
        if(err){
            console.log(err)
        }else{
            e1.emit("appendData")
        }
    })
})
e1.on("appendData",()=>{
    fs.appendFile("abc.txt"," I'm learning Node JS.",(err)=>{
        if(err){
            console.log(err)
        }else{
            e1.emit("readData")
            console.log("Data Appended Successfully")
        }
    })
})
e1.on("readData",()=>{
    fs.readFile("abc.txt","utf-8",(err,data)=>{
        if(err){
            console.log(err)
        }else{
            http.createServer(function(req,res){
                res.writeHead(200,{"content-type":"text/plain"})
                res.write(data)
                res.end()
            }).listen(8002)
            console.log("All operations performed successfully")
        }
    })
})
e1.emit("createfile")