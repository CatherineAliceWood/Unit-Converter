const conversionInput = document.querySelector("#input")
const convertBtn = document.querySelector("#convert-btn")
const lengthText1 = document.querySelector("#length-1")
const lengthText2 = document.querySelector("#length-2")
const volText1 = document.querySelector("#volume-1")
const volText2 = document.querySelector("#volume-2")
const massText1 = document.querySelector("#mass-1")
const massText2 = document.querySelector("#mass-2")
convertBtn.addEventListener("click", function () {
    lengthText1.classList.add("p-result")
    lengthText2.classList.add("p-result")
    lengthText1.textContent = `${conversionInput.value} meters = ${(conversionInput.value * 3.281).toFixed(3)} feet`
    lengthText2.textContent = `${conversionInput.value} feet = ${(conversionInput.value * 0.3048).toFixed(3)} meters`
    volText1.classList.add("p-result")
    volText2.classList.add("p-result")
    volText1.textContent = `${conversionInput.value} litres = ${(conversionInput.value * 0.21996923465436).toFixed(3)} gallons`
    volText2.textContent = `${conversionInput.value} gallons = ${(conversionInput.value * 4.54609188).toFixed(3)} litres`
    massText1.classList.add("p-result")
    massText2.classList.add("p-result")
    massText1.textContent = `${conversionInput.value} kilograms = ${(conversionInput.value * 2.204).toFixed(3)} pounds`
    massText2.textContent = `${conversionInput.value} pounds = ${(conversionInput.value * 0.4359237).toFixed(3)} kilograms`
})