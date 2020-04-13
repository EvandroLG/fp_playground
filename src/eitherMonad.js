const assert = require('assert').strict;

const Right = (value) => ({
    chain: (f) => f(value),
    map: (f) => Right(f(value)),
    fold: (f, g) => g(value),
});

const Left = (value) => ({
    chain: (f) => Left(value),
    map: (f) => Left(f(value)),
    fold: (f, g) => f(value),
});

const fromNullable = (value) => (value ? Right(value) : Left());

const tryCatch = (callback) => {
    try {
        Right(callback());
    } catch (e) {
        Left(e);
    }
};

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

// street name
const street = (user) =>
    fromNullable(user.address).fold(
        () => 'no street!',
        (address) => address.street,
    );

const user = { address: { street: { name: 'Criciuma' } } };
assert.deepEqual(street(user), { name: 'Criciuma' });
assert.equal(street({}), 'no street!');
