/*
Write a nodeJS script to fire an event named calculate which 
calculates the total marks of 5 subjects about of 25 marks and 
displays the total marks on console as an output.The calculate event 
fires another event name percentage which takes total marks as 
argument and percentage should get displayed in console.
*/
var e=require('events')
var ee= new e()
ee.on("calculate",(arr)=>{
    let total=0
    for (let i of arr){
        total+=i
    }
    console.log(total)
    ee.emit("percentage",total)
})
ee.on("percentage",(total)=>{
    let per=total/1.25
    console.log(per)
})
ee.emit("calculate",[25,25,25,25,20])