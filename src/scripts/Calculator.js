class Calculator {
    constructor() {
        console.log("this is calculator");
    }

    penjumlahan(num1, num2) {
        return num1 + num2;
    }
    pengurangan(num1, num2) {
        return num1 - num2;
    }
    perkalian(num1, num2) {
        return num1 * num2;
    }
    pembagian(num1,num2) {
        return num1 / num2;
    }
    
}
module.exports = Calculator;
