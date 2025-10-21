const nums = [1, 2, 3]

const doublePure = (arr) => {
    const newArr = arr.map((element) => element * 2);
    return newArr;
};

const doubleImpure = (arr) => {
    // an impure function will modify the original output
    // create a for loop to iterate the array and double its value
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    // return our modified array
    return arr;
};

console.log(doublePure(nums)); // [2, 4, 6]
console.log(doublePure(nums)); // [2, 4, 6]

console.log(doubleImpure(nums)); // [2, 4, 6]
console.log(doublePure(nums)); // [4, 8, 12]
