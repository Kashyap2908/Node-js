// write node js script to print query string of url in url.txt file using callback
var u=require("url")
addr="https://localhost:8080/test?name=xyz&age=30"
/*
q=u.parse(addr)
process.noDeprecation=true
data=q.query
var fs=require('fs')
fs.writeFile("url.txt",data,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Written")
    }
})
    */


q=u.parse(addr,true)
process.noDeprecation=true
data=JSON.stringify(q.query)
var fs=require('fs')
const { json } = require("stream/consumers")
fs.writeFile("url.txt",data,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Written")
    }
})