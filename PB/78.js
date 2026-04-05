/*
Write a node.js script using event handling to consider an errorneous 
triangle to find area. Take fix values of all three sides. 
(1) If any of the side is negative, then print the message “Sides must 
be positive” using event handler. 
(2) If perimeter of triangle is negative then print the message 
“Perimeter must be positive” using event handler.
(3) Both above messages must be printed in sequence
*/

var e=require('events');
var ee=new e()
ee.on("sides",(a,b,c)=>{
    if(a<0 || b<0 || c<0){
        console.log("Sides must be positive");
    }else{
        ee.emit("perimeter",a,b,c)
    }
})
ee.on("perimeter",(a,b,c)=>{
    let perimeter=(a+b+c)
    if(perimeter<0){
        console.log("Perimeter must be positive");
    }else{
        console.log("Perimeter is: "+perimeter);
    }
})
ee.emit("sides",3,-4,5)