const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd = arr.filter((num) => num % 2 !== 0);
const even = arr.filter((num) => num % 2 === 0);
const prime = arr.filter((num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
    }
);

//sorting and merging
const merge = [...odd, ...even, ...prime];
console.log("Merge and Sorted")
console.log(merge.sort((a, b) => a - b));

//removing dublicate
const unique = [...new Set(merge)];
console.log("Unique")
console.log(unique);


