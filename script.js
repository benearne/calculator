document.addEventListener("DOMContentLoaded", function() {

    // display gesamte Eingabe
    let input = [];
    // NUMS AND OPERATORS
    let numbers = [];
    let operators = [];

    // BUTTONS
    // input buttons
    const inputButtons = document.querySelectorAll(".inputButton");
    // clear button
    const clear = document.getElementById("clear");
    // display
    const display = document.getElementById("display");

    // GET THE INPUT
    // Jeden button durchgehen und einen Event Listener anhängen
    inputButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            const value = event.target.textContent;
            input.push(value)
            // anzeige aktualisieren
            display.innerHTML = input.join("");
        })
    })
    
    // OPERATE
    // Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.
    const equals = document.getElementById("equals");

    equals.addEventListener("click", function(event) {
        findElements();
        if (numbers.length === operators.length) {
            display.innerHTML = "No correct promt, try again";
        }
        else {
            result = operate(numbers, operators);
            // result anzeigen
            display.innerHTML = "Result: " + result;
            
            input = [];
            numbers = [];
            operators = [];
        }
        
    })

        
    // CLEAR 
    // event listener for clear
    clear.addEventListener("click", function(event) {
        input = [];
        display.innerHTML = "Enter a promt";
    })

    // NUMBERS AND OPERATORS
    function findElements() {
        let currentNum = "";

        input.forEach(item => {
            if (["+", "-", "*", "/"].includes(item)) {
                if (currentNum !== '') {
                    numbers.push(Number(currentNum));
                    currentNum = '';
                }
                operators.push(item);
            }
            else {
                currentNum += item.toString();
            };
        });

        if (currentNum !== '') {
            numbers.push(Number(currentNum));
        }
    }
    
    function operate(numbers, operators) {    
        let result = numbers[0];

        for (let i = 0; i < operators.length; i++) {
            let op = operators[i];
            let nextNumber = numbers[i + 1];

            switch (op) {
                case '+':
                    result += nextNumber;
                    break;
                case '-':
                    result -= nextNumber;
                    break;
                case '*':
                    result *= nextNumber;
                    break;
                case '/':
                        result /= nextNumber;
                        break;
            }
        }
    return result;
    console.log(result)
    }
})