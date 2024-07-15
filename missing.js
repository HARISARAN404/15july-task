function missing(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return arr.length + 1;
}
const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const missingNumber = missing(numbers);
console.log( missingNumber);
