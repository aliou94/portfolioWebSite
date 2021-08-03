var prompt = require("prompt-sync")();
let array = [2, 3 , 4, 11 , 12, 5, 5, 5, 2, 16, 9, 1]
let n = prompt("guest a number")
var positions = []

for(let i=0; i<array.length; i++){
    
    if (array[i]===parseInt(n)) positions.push(i)
   
   }

   console.log(`input is:${n}, it occurrs ${positions.length} times`) 
   for(j=0; j<positions.length; j++) console.log("at index"+ " "+ (positions[j]))
