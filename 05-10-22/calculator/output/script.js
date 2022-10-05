// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
window.onerror = function () {
    alert("PLEASE INPUT VALID EXPRESSION");
    screenValue = "";
    screen.value = screenValue;
    console.clear();
}
function checkForBracketMulti() {
    // Check if there's a number directly infront of a bracket
    if (
        screen.value.includes("(") &&
        !isNaN(screen.value.charAt(screen.value.indexOf("(") - 1))
    ) {
        window.onBracketMultiplication();
        return;
    } else {
        screen.value = eval(screenValue);
    }
}
window.onBracketMultiplication = function () {
    screenValue = addStr(screen.value, screen.value.indexOf("("), "*");
    screen.value = eval(screenValue);
}
function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}