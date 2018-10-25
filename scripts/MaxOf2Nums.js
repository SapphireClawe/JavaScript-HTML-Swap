console.log("I made it to MaxOf2Nums.js!");
function max (number1, number2) {
  if (number1 > number2) return number1;
  else if (number1 < number2) return number2;
  else square = true;
  console.log("The function didn't run properly");

}

let square = false;

let number = max (7, 7);
if (square == true) console.log("The numbers are the same.");
else console.log("The larger number is", number);
