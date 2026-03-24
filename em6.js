// write a node js script using event handling to perform following tasts:
// 1. create a folder named "ABC"
// 2. create a file named "xyz.txt" and write data into it
// 3. append data to that file and print message "Data appended successfully"
// 4. read the content of the file and print it to the console
// 5. copy content from xyz.txt to pqr.txt
// 6. delete the file xyz.txt and print message "all operations performed successfully" perform all using synchronous file handling
var fs=require('fs');
var e=require('events');
var e1=new e();
e1.on("createFolder",()=>{
    if(fs.existsSync("ABC")){
        console.log("Folder already exists");
    }else{
        fs.mkdirSync("ABC");
    }
    e1.emit("createFile");
})
e1.on("createFile",()=>{
    fs.writeFileSync("ABC/xyz.txt","Hello, I'm Kashyap!");
    e1.emit("appendData");
})
e1.on("appendData",()=>{
    fs.appendFileSync("ABC/xyz.txt"," I'm learning Node JS.");
    console.log("Data appended successfully");
    e1.emit("readFile");
})
e1.on("readFile",()=>{
    data=fs.readFileSync("ABC/xyz.txt","utf-8");
    console.log(data);
    e1.emit("copyFile");
})
e1.on("copyFile",()=>{
    fs.copyFileSync("ABC/xyz.txt","ABC/pqr.txt");
    e1.emit("deleteFile");
})
e1.on("deleteFile",()=>{
    fs.unlinkSync("ABC/xyz.txt");
    console.log("all operations performed successfully");
})
e1.emit("createFolder")