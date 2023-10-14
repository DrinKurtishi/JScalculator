let displayNumbers = document.getElementById('displayNumbers');
//displayNumbers.innerHTML = "123456789"

let calcButtons = document.getElementsByClassName('Buttons');
for(let i = 0; i < calcButtons.length; i++){
    calcButtons[i].addEventListener('click', () =>{
        if(calcButtons[i].id === "=" || calcButtons[i].id === "C" || calcButtons[i].id === "+/-"){
            
        }
        else{
            displayNumbers.innerHTML = calcButtons[i].id;
        }
    })
}