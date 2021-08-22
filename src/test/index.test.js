const Calculator = require("../scripts/Calculator")

const calc = new Calculator();

test("penjumlahan", () => {
    expect(calc.penjumlahan(1, 2)).toBe(3);
})