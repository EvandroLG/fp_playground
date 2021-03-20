const assert = require('assert');

// sum
const sum = (arr) => (arr.length === 1 ? arr[0] : arr[0] + sum(arr.slice(1)));
assert.equal(sum([1, 2, 3, 4]), 10);

// fibonacci
const fibonacci = (n) => (n === 1 ? 1 : n * fibonacci(n - 1));
assert.equal(fibonacci(3), 6);

// map
const map = (resolver, arr) => {
    if (!arr.length) {
        return [];
    }

    return [resolver(arr[0])].concat(map(resolver, arr.slice(1)));
};

assert.deepEqual(
    map((item) => item + 2, [1, 2, 3, 4]),
    [3, 4, 5, 6],
);
