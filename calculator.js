var numberKnoppen = document.querySelectorAll(".number");

var display = document.querySelector("#display");

for (var i = 0; i < numberKnoppen.length; i++) {
    numberKnoppen[i].onclick = numberFunctie;
}

function numberFunctie(event) {
    console.log("in numberFunctie");
    var displayText = display.value;
    var buttonText = event.target.textContent;
    var nieuweText = displayText + buttonText;
    display.value = nieuweText;
}

var operatorKnoppen = document.querySelectorAll(".operator");

for (var i = 0 ; i < operatorKnoppen.length; i++) {
    operatorKnoppen[i].onclick = operatorFunctie;
}

var getalText;
var operator;

function operatorFunctie(event) {
   getalText = display.value;
   operator = event.target.textContent;
   display.value = "";
}

var berekenKnop = document.querySelector("#calculating");
berekenKnop.onclick = berekenen;

function berekenen(event)
{
    var getal1 = parseInt(getalText);
    var getal2 = parseInt(display.value);
    console.log(getal1);
    console.log(getal2);
    var antwoord;
    if (operator == "+")
        antwoord = getal1 + getal2;
    if (operator == "-")
        antwoord = getal1 - getal2;
    if(operator == "*")
        antwoord = getal1 * getal2;
    if(operator == "/")
        antwoord = getal1 / getal2;
    if(operator == "c")
        antwoord = "";
    display.value = antwoord;
}