console.log('Hello, front end');


////////// VARIABLES ////////////

let Celcius = null;
let Farenheit = null;
let temp = 0;

//let getNum = document.getElementById('inputField'); moved to functions
//let inputNum = inputField.value;
const readout = document.querySelector('#readout');
const submitButton = document.querySelector('#submitButton');
const clearButton = document.querySelector('#clearButton');

const inputField = document.querySelector('#inputField')
/* ASKME const inputField = document.getElementById('inputField');
let inputNum = inputField.value;*/ //These 2 functions don't run in chrome for some reason


/////////// FUNCTIONS ///////////

// activateSubmitButton
// when clicked, takes input from input field and converts it according to radio 'temperatureConverterRadio', then displays that value in h2 'readout', then clears the input field
submitButton.addEventListener('click', function(e) {
  writeToReadout(calculateConversion(document.querySelector('#inputField').value));
})

clearButton.addEventListener('click', function(e) {
  clearInputField();
  clearReadout();
})

// calculateConversion
// if radial CtF (Celsius to farenheit) is clicked, returns (NUM - 32)*(5/9);
// if radial FtC (farenheit to Celcius) is clicked, returns (number + 32)*(9/5);

function calculateConversion(t) {
  if (document.getElementById('temp1').checked) {
    return ((t - 32)*(5 / 9));
}
  else if (document.getElementById('temp2').checked) {
    return ((t + 32)*(9 / 5));
  }
  else {
    return t;
}
}

// var button1 = document.getElementById("button1");
// var button2 = document.getElementById("button2");

// if (button1.checked){
//     alert("radio1 selected");
// }else if (button2.checked) {
//     alert("radio2 selected");
// }

function clearInputField() {
  // document.getElementById('inputField').remove()
  // const newInput = document.createElement("input");
  // newInput.id = "inputField";
  // newInput.type = "text";
  // document.getElementById('inputContainer').appendChild(newInput);
  document.getElementById('inputField').select()
  document.getElementById('inputField').setRangeText("")
}

// writeToReadout
// write input to readout
function writeToReadout(num) {
  readout.innerText = num
}

// clearReadout
// clears numerical input from id 'readout', after conversion is complete

function clearReadout() {
  readout.innerText = null;
}

console.log(temp);