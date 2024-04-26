//  Q no 106
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020));
console.log(isLeapYear(1900));
// Q no 107
function isDivisibleByTwoOrThree(number) {
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleByTwoOrThree(12));
console.log(isDivisibleByTwoOrThree(14));
// Q no 108
function areStringsEquallIgnoreCase(str1, str2) {
    return str1.toLowerCase() == str2.toLowerCase();
}
console.log(areStringsEquallIgnoreCase("Hello", "Hello"));
console.log(areStringsEquallIgnoreCase("World", "World"));
