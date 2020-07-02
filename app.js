function calculateBmi() {

    let weightVal = document.getElementById("weight");
    let heightVal = document.getElementById("height");
    let result = document.querySelector("#result");

    weight = parseFloat(weightVal.value);
    height = parseFloat(heightVal.value);

    height = height / 100;  // metrda bo'lishi kerak

    let bmi = (weight / (height * height)).toFixed(2); 

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi < 24.99 && bmi >=15.00) {
        status = "You are normal";
    } else {
        status = "Overweight";
    } 
    

    result.innerHTML = bmi.toString() + " - " + status;

}