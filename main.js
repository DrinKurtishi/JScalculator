//my implementation: store first number in array, after an operator is clicked, start storing in second number array, 
//if another operator is clicked: perform operation on the 2 arrays, store the result in first number array and empty second array 
//so its ready if another operation is made. Display end result after "=" is clicked and empty both arrays(innerhtml is empties only after C). 
//if C is clicked empty both arrays and the innerhtml



let displayNumbers = document.getElementById('displayNumbers');
//displayNumbers.innerHTML = "123456789"
let calcButtons = document.getElementsByClassName('Buttons');
let firstNumber = [];
let secondNumber = [];
let operator = "";
let determineArray = 0;
for(let i = 0; i < calcButtons.length; i++){
    calcButtons[i].addEventListener('click', () =>{
        if(calcButtons[i].id === "+"){
            operator = "+";

        }
        else if(calcButtons[i].id === "-"){
            operator = "-";
        }
        else if(calcButtons[i].id === "*"){
            operator = "*";
        }
        else if(calcButtons[i].id === "/"){
            operator = "/";
        }
        else{
            if(firstNumber.length < 9){
                firstNumber.push(calcButtons[i].id)
                displayNumbers.innerHTML = firstNumber.join(""); //remove commas when displaying array
            }
            else{
                displayNumbers.style.fontSize = "4vw";
                displayNumbers.innerHTML = "Error, limit exceeded";
                firstNumber = []; //empty the arrays
                secondNumber = [];
            }
        }
    })
}

function operate(firstNumber, secondNumber, operator){
    if(operator === "+"){
        return firstNumber + secondNumber;
    }
    else if(operator === "-"){
        return firstNumber - secondNumber;
    }
    else if(operator === "*"){
        return firstNumber * secondNumber;
    }
    else if(operator === "/"){
        return firstNumber - secondNumber;
    }
}