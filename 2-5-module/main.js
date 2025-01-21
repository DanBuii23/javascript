// main.js
import { add, subtract, multiply, divide } from './math.js';
import { toUpperCase, toLowerCase, reverseString, isPalindrome } from './string.js';

console.log("Phép toán:");
console.log(`5 + 3 = ${add(5, 3)}`);
console.log(`10 - 7 = ${subtract(10, 7)}`);
console.log(`4 * 6 = ${multiply(4, 6)}`);
try {
    console.log(`8 / 2 = ${divide(8, 2)}`);
    console.log(`8 / 0 = ${divide(8, 0)}`); // Sẽ ném lỗi
} catch (error) {
    console.error(error.message);
}

console.log("\nXử lý chuỗi:");
console.log(`Viết hoa: ${toUpperCase("hello world")}`);
console.log(`Viết thường: ${toLowerCase("HELLO WORLD")}`);
console.log(`Đảo ngược chuỗi: ${reverseString("hello")}`);
console.log(`Chuỗi "Madam" là palindrome? ${isPalindrome("Madam")}`);
console.log(`Chuỗi "Hello" là palindrome? ${isPalindrome("Hello")}`);
