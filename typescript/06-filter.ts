const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.filter((number) => {
    return number % 2 !== 0;
});
console.log("Original Array:", numbers);
console.log("Odd Numbers:", result);