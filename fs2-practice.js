// // read data from file and arrange in accending order 
// // use .sort() method to sort the data in accending order
// var fs = require('fs');

// fs.writeFileSync("numbers.txt", "50 -1 99 100 20 0 56 78 59");
// var data = fs.readFileSync("numbers.txt", "utf-8");
// var numbers=data.split(" ");
// console.log("Before sorting: ", numbers);
// // numbers.sort((a, b) => a - b);
// for (i = 0; i < numbers.length; i++) {
//     for (j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] > numbers[j]) {
//             var temp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = temp;
//         }
//     }
// }
// console.log("After sorting: ", numbers);


// nested write read functions(Asynchronous way)
// var fs = require('fs');
// fs.writeFile("data.txt",
//      "Hello, World!",
//       function (err) {
//     if (err) {
//         console.log("Error ", err);
//     }else{
//         console.log("err");
//     }
//     console.log("File written successfully");
// })
// console.log("Outside")

// write data to file, appending data to file, read data from file using callback functions(Synchronous way)
var fs = require('fs');
fs.writeFile("data.txt","Hello, Good Morning!",function (err) {
        if (err) {
            console.log("Error ", err);
        }else{
            fs.appendFile("data.txt", " Have a nice day!", function (err2) {
                if (err2) {
                    console.log("Error ", err2);
                }else{
                    var data = fs.readFile("data.txt", "utf-8", function (err3, data) {
                        if (err3) {
                            console.log("Error ", err3);
                        }else{
                            console.log(data);
                        }
                    });
                }
            });
        }
    });