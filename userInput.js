var prompt = require("prompt-sync")();

var n = prompt("guest a number")
 array = [12, 32, 4, 9, 5, -1, 100, -5, 9 , 16];
 found = false;

 num = n


for (let i = 0; i < array.length; i++) {
  if (num == array[i]) {
    console.log('Number found in ' + (i + 1) + ' position');
    found = true;
    break;
  }
}
if (!found) {
  console.log('Number not found');
}



