function charCount(str) {
    const countDict = {};
    for (let char of str) {
        if (countDict[char]) {
            countDict[char]++;
        } else {
            countDict[char] = 1;
        }
    }
    return countDict;
}
console.log(charCount("Naa ready than varava . annan na erangi varava"));
