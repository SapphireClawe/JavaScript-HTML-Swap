console.log("I made it to childTemplate.js!");

function main () {

  let firstNumber, secondNumber, text;

  firstNumber = document.getElementById("textfield1").value;

  document.getElementById("validityTest1").innerHTML = alert( testNaN (firstNumber));
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

  secondNumber = document.getElementById("textfield2").value;

  document.getElementById("validityTest2").innerHTML = alert( testNaN (secondNumber));
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);

  if (stop == true) {
    document.getElementById("large").innerHTML = "Please restart"
  

  }



}
