let inputTextValue = document.getElementById("inputValue");
let inputValue = (inputTextValue);
let sth = document.getElementById("convertBtn");
let textOne = document.getElementById("textOne");
let textTwo = document.getElementById("textTwo");
let textThree = document.getElementById("textThree");

sth.addEventListener("click",()=>{
    let inputText = inputValue.value
    let lenghtConvertFeet = inputValue.value*3.281
    let lenghtConvertMeter = inputValue.value/3.281
    let volumeConvertLiters = inputValue.value*0.264
    let volumeConvertGallons = inputValue.value/0.264
    let massConvertKillogram = inputValue.value*2.204
    let massConvertPounds = inputValue.value/2.204

    textOne.innerHTML = `${inputText} liters = ${lenghtConvertFeet.toFixed(2)} feet | ${inputText} feet = ${lenghtConvertMeter.toFixed(2)} meters `
    textTwo.innerHTML = `${inputText} liters = ${volumeConvertLiters.toFixed(2)} gallons | ${inputText} gallons = ${volumeConvertGallons.toFixed(2)} liters `
    textThree.innerHTML = `${inputText} liters = ${massConvertKillogram.toFixed(2)} pounds | ${inputText} pounds = ${massConvertPounds.toFixed(2)} kilos `
})

