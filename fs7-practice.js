// Write node js script to copy content from one file to another file
// data should fetch from source.txt file and write in destination.txt file
// and read the content of destination.txt file and display in console
// perform using asynchronous file handling
var fs = require('fs');
// fs.writeFile("source.txt", "Hello, Good night! Sweet dreams!", (err) =>{
//     if (err){
//         console.log("Error ", err);
//     }else{
//         data=fs.readFile("source.txt", "utf-8", (err2, data) => {
//             if (err2) {
//                 console.log("Error ", err2);
//             }else{
//                 fs.writeFile("destination.txt", data, (err3) => {
//                     if (err3) {
//                         console.log("Error ", err3);
//                     }else{
//                         content=fs.readFile("destination.txt", "utf-8", (err4, content) => {
//                             if (err4) {
//                                 console.log("Error ", err4);
//                             }else{
//                                 console.log(content);
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })
fs.writeFile("source.txt", "Hello, Good night! Sweet dreams!", (err) => {
    if (err) {
        console.log("Error ", err);
    }else{
        fs.copyFile("source.txt", "destination.txt", (err) => {
            if (err) {
                console.log("Error ", err);
            }else{
                console.log("File copied successfully");
            }
        })
    }
});
