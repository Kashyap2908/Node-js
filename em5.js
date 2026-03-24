// write node js script to handle event to write data ,append data and then read the file ,display data in console 
// do using Asynchronous file module
var fs=require('fs')
var e=require('events');
var e1=new e();
function writeData(){
    fs.writeFile("temp.txt","Hello, Good night",(err)=>{
        if(err){
            console.log("Error: ", err)
        }else{
            e1.emit("appendData"," Sweet dreams!");
        }
    })
}
function appendData(x){
    fs.appendFile("temp.txt",x,(err2)=>{
        if(err2){
            console.log("Error: ", err2)
        }else{
            e1.emit("readData");
        }
    })
}
function readData(){
    data=fs.readFile("temp.txt","utf-8",(err3, data)=>{
        if(err3){
            console.log("Error: ", err3)
        }else{
            console.log(data)
        }
    })
}
e1.on("appendData",appendData)
e1.on("readData",readData)
e1.on("writeData",writeData)
e1.emit("writeData")