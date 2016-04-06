//alle knoppen met nummers selecteren

var numberKnoppen = document.querySelectorAll(".number");

var display = document.querySelector("#display")

for (var i = 0; i < numberKnoppen.length; i++) {
    numberKnoppen[i].onclick = numberFunctie;
}
//event functie want gekoppeld aan click
function numberFunctie(event) {
    console.log("in numberFunctie");
    //benoemen variabelen
    var displayText = display.value;

    console.log("displayText" + displayText);
    //aan event vragen welk knopje wordt ingedrukt. textContent haalt text van button 
    var buttonText = event.target.textContent;
    console.log("buttonText" + buttonText);

    //twee teksten samenvoegen van text in display met text in button tags
    var nieuweText = displayText + buttonText;
    //hier worden de opgetelde waarden in de display getoond
    display.value = nieuweText;
}

//vanaf hier operators. eerst alle operator knoppen selecteren
var operatorKnoppen = document.querySelectorAll(".operator");

for (var i = 0 ; i < operatorKnoppen.length; i++) {
    operatorKnoppen[i].onclick = operatorFunctie;
}
//variabelen in window omgeving zodat niet gewist wordt naar sluiten functie
var getalText;
var operator;
//functie voor operators
function operatorFunctie(event) {
    console.log("in operatorFunctie");
// niet nogmaals var ervoor zetten want anders wordt var opnieuw aangemaakt
   getalText = display.value;
   operator = event.target.textContent;

    display.value = "";
}

//vanaf hier de berekenknop. er is geen lijst verschillende knopjes dus geen event.target
var berekenKnop = document.querySelector("#calculating");
berekenKnop.onclick = berekenen

function berekenen(event)
{
    console.log("in bereken");
    //parseInt om text naar nummer omk te zetten
    var getal1 = parseInt(getalText);
    //getal 2 staat in display
    var getal2 = parseInt(display.value);
    console.log(getal1);
    console.log(getal2);
    //variabel antwoord aanmaken
    var antwoord;
    //operator zoeken
    if (operator == "+")
        antwoord = getal1 + getal2;
    if (operator == "-")
        antwoord = getal1 - getal2;
    if(operator == "*")
        antwoord = getal1 * getal2;
    if(operator == "/")
        antwoord = getal1 / getal2;

    //antwoord weergeven
    display.value = antwoord;
}