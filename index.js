const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result")
const weightConditionEl = document.getElementById("weight-condition")
function calculateBMI(){
    const weightValue = document.getElementById("weight").value;
    const heightValue = document.getElementById("height").value / 100;

    const bmiValue = weightValue /(heightValue * heightValue)

    bmiInputEl.value = bmiValue

    if(bmiValue < 18.5){
        weightConditionEl.innerText = "Under weight"
    }
    else if(bmiValue >= 18.5 && bmiValue <= 24.9 ){
        weightConditionEl.innerText = "Normal weight"
    }
    else if(bmiValue >= 25 && bmiValue <= 29.9){
        weightConditionEl.innerText = "Over weight"
    }
    else{
        weightConditionEl.innerText = "Obese"
    }
}

btnEl.addEventListener("click", calculateBMI)