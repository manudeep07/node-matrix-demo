const assert = require("assert");
const { add, subtract, multiply, divide } = require("./index");

console.log("Running unit tests...");

assert.strictEqual(add(2, 3), 5, "2 + 3 should be 5");
assert.strictEqual(subtract(10, 4), 6, "10 - 4 should be 6");
assert.strictEqual(multiply(3, 4), 12, "3 * 4 should be 12");
assert.strictEqual(divide(20, 5), 4, "20 / 5 should be 4");
assert.throws(() => divide(10, 0), /Division by zero/, "Division by zero should throw an error");

console.log("All tests passed successfully!");
