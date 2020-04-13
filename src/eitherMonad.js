const assert = require('assert').strict;

const Right = (value) => ({
    map: (f) => Right(f(value)),
    fold: (f, g) => g(value),
});

const Left = (value) => ({
    map: (f) => Left(f(value)),
    fold: (f, g) => f(value),
});

// find color
const findColor = (key) => {
    const found = {
        red: '#ff4444',
        blue: '#3b5998',
    }[key];

    return found ? Right(found) : Left('missing');
};

const color = (value) =>
    findColor(value)
        .map((x) => x.toUpperCase())
        .fold(
            () => 'no color!',
            (color) => color,
        );

assert.equal(color('red'), '#FF4444');
assert.equal(color('redd'), 'no color!');
