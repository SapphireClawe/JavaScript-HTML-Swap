console.log("You made it to the LandscapePortrait.js!");

let stop = false;

function javaScript () {

}
function main () {
   let firstNumber, secondNumber;

   firstNumber = document.getElementById("textfield1").value;

   document.getElementById("validityTest1").innerHTML = alert( testNaN (firstNumber) );
   document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

   secondNumber = document.getElementById("textfield2").value;

   document.getElementById("validityTest2").innerHTML = alert( testNaN (secondNumber) );
   document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);

   if (stop == true) {
   document.getElementById("answer").innerHTML = "Restart because I said so."
 }
 else {
   console.log("What did you say?", javaScriptFunction-Solution (firstNumber, secondNumber));
   document.getElementById("answer").innerHTML = "What did you say? " + geometry (firstNumber, secondNumber);
   }
  }
  function testNaN (number) {
  if ( isNaN (number) ) {
    stop = true;
return "Type a Real Number"
} else {
return "Input Validated"
}
 }



}
