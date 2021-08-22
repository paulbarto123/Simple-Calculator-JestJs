//import Calculator from "./Calculator";
//const Calculator = require("./Calculator")

const firstNumberInput = document.querySelector(".first-number");
const secondNumberInput = document.querySelector(".second-number");

const penjumlahan = document.querySelector(".btn-penjumlahan");
const perkalian = document.querySelector(".btn-perkalian");
const pengurangan = document.querySelector(".btn-pengurangan");
const pembagian = document.querySelector(".btn-pembagian");

const resultEl = document.querySelector(".result");


const calculator = new Calculator();

const alertEmpty = () => {
    alert("ada input kosong");
}
function isAnyEmpty() {
    if(firstNumberInput.value == "" || secondNumberInput.value == "" ) {
        return true
    }
    else {
        return false
    }
}
penjumlahan.addEventListener("click", function() {
    console.log("penjumlahan")
    if(isAnyEmpty()){
        alert("ada input kosong");
    }
    var result = calculator.penjumlahan(
       Number(firstNumberInput.value), 
       Number(secondNumberInput.value)
    )
    resultEl.innerHTML = `Result : ${result}`
})

pengurangan.addEventListener("click", function() {
    if(isAnyEmpty()){
        alertEmpty()
    }
    var result = calculator.pengurangan(
       Number(firstNumberInput.value), 
       Number(secondNumberInput.value)
    )
    resultEl.innerHTML = `Result : ${result}`
})

perkalian.addEventListener("click", function() {
    if(isAnyEmpty()){
        alertEmpty()
    }
    var result = calculator.perkalian(
       Number(firstNumberInput.value), 
       Number(secondNumberInput.value)
    )
    resultEl.innerHTML = `Result : ${result}`      
})

pembagian.addEventListener("click", function() {
    if(isAnyEmpty()){
        alertEmpty()
    }
    var result = calculator.pembagian(
       Number(firstNumberInput.value), 
       Number(secondNumberInput.value)
    )
    resultEl.innerHTML = `Result : ${result}`
})