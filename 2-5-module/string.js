// string.js
export const toUpperCase = (str) => str.toUpperCase();

export const toLowerCase = (str) => str.toLowerCase();

export const reverseString = (str) => str.split('').reverse().join('');

export const isPalindrome = (str) => {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
};
