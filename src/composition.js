const { compose, prop, last, map } = require('ramda');
const assert = require('assert').strict;

// normalize usernames
const toLower = (str) => str.toLowerCase();
const underscore = (str) => str.replace(/\s/g, '_');
const normalize = compose(toLower, underscore);

assert.equal(normalize('Evandro Goncalves'), 'evandro_goncalves');

// last item in stock
const items = [
  { name: 'Nintendo Switch', in_stock: true },
  { name: 'Playstation 4', in_stock: true },
  { name: 'Xbox', in_stock: false },
  { name: 'LG TV', in_stock: false },
  { name: 'Samsung TV', in_stock: true },
];

const isLastInStock = compose(prop('in_stock'), last);
assert.ok(isLastInStock(items));

// name last item
const nameLastItem = compose(prop('name'), last);
assert.equal(nameLastItem(items), 'Samsung TV');

// normalize item names
const formatItem = compose(toLower, underscore, prop('name'));
const normalizeItemNames = map(formatItem);

assert.deepEqual(normalizeItemNames(items), [
  'nintendo_switch',
  'playstation_4',
  'xbox',
  'lg_tv',
  'samsung_tv',
]);
