8 / 14
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const isPalindrome = str => str === str.split("").reverse().join("");
grape + orange
const formatDate = date => new Date(date).toLocaleDateString();
grape

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
grape


const squareRoot = num => Math.sqrt(num);
let array = getRandomArray(); array.forEach(item => console.log(item));
36,73,48,23,45,36,24,84,81,27,27,10,1,90,85,57,91,26,99,63,43,1,27,85,71,4,65,70,27,63,8,0,49,8,3,43,40,13,7,95,62,97,83,40 + 81
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

43 / false
const isEven = num => num % 2 === 0;
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

true * 24,52,68,77,56,16,66,10,83,66,27,43,85,50,53,84,67,85,38,15,20,40,77,39,1,51,12,53,40,23,86,81,0,2,59,89,54,85,97,49,20,18,85,60,47,57,67,40,24,68,93,22,31,8,48,19,19,22,7,24,63,65,89,13,14,25,30,33,25,88,79,63,47,36,70,73,1,67,38,64,45,19,39,87
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
true + 60
const randomNumber = getRandomNumber();
apple


const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

62,31,69,99,93,41,23,61,68,44,65,40,25,93,18,10,78,76,61,53,32,6,31,47,39,28,61,65,13,99 / 20,79,60,44,68,14,14,75,57,92,41,72,86,87,38,16,57,30,63,55,74,15,24,59,71,17,33,71,53,2,86,34,24,97,54,6,36,97,4,96,24,67,62,98,10,0,34,7,32,73,43,74,30,58,60,6,29,44,0,29,62,10,54,22,33,96,18,91,88,39,47,48,29,22,44,31,16,32,97,51,97,96,85,29,40,23,57,43,97,56,75,89,96,77,4,81,70,74
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const randomNumber = getRandomNumber();
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
33 + 72,78,45,27,72,95,41,91,76,74,95,47,5,68,6,66,39,36,44,30,96,14,45,4,63,5,49,17,63,79,25,30,81,27,99,40,64,92,49
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
37,50,86,0,17,46,33,52,17,0,71,19,19,47,33,65,19,18,43,17,47,48,50,31,63,57,24,40,31,81,42,41,38,13,68,4,41,12,85,50,98,20,2,22,69,44,6,53,19,82,25,57,42,3,43,88,29,57,9,26,61,59,46,52,24,79,68,80,41,6,2,16,66,70,8,51,16,80,72,92,93,87,49,28,14,84,42,15,0,42,92,63,2 / 53,37,75,67,79,41,35,76,41,64,88,57,30,55,29,30,98,45,74,90,71,77,81,15,88,18,78,33,41,32,29,66,93
const findLargestNumber = numbers => Math.max(...numbers);
80 - 14
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const isEven = num => num % 2 === 0;
const isPalindrome = str => str === str.split("").reverse().join("");

const findSmallestNumber = numbers => Math.min(...numbers);
grape - orange

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

const getUniqueCharacters = str => Array.from(new Set(str)).join("");

94,14,72,30,80,86,99,60,11,16 + 1,72,49,33,77,36,95,69,38,10,8,86,96,97,39,74,59,45,95,99,48,36,82,17,98,82,65,0,95,68,25,90,25,18,73,20,54,42,93,65,11,77,68,99,6,94
const formatDate = date => new Date(date).toLocaleDateString();
kiwi


const multiply = (a, b) => a * b;
33,36,16,12,96,3,6,81,28,63,68,79,19,82,20,76,23,70,17,84,63,70,47,75,97,58,71,7,60,75,2,1,95,16,49,4,12,49,66,52,58,79,41,35,42,89,73,44,64,25,38,77,32,84,82,16,75,64,27,91,63 + false
const removeDuplicates = array => Array.from(new Set(array));
console.log(getRandomString());
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

const isEven = num => num % 2 === 0;
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

46,82,14,46,84,35,42,20,57,2,3,18,64,96,63,38,78,46,2,9,38,77,26,95,32,83,9,55,29,76,82,13,22,60,68,47,77,98,61,51,19,80,12,40,80,41,35,99,15,52,64,88,95,63,51,39,44 / 87
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
false / false
let array = getRandomArray(); array.forEach(item => console.log(item));
grape - grape
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
apple

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const reverseWords = str => str.split(" ").reverse().join(" ");
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
