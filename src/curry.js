const { curry, map, reduce } = require('ramda');
const assert = require('assert').strict;

// Words
const split = curry((delimiter, str) => str.split(delimiter));
const words = split(' ');
assert.deepEqual(words('Functional Programming is pretty'), [
  'Functional',
  'Programming',
  'is',
  'pretty',
]);

// Sentences
const sentences = map(words);
assert.deepEqual(sentences(['JavaScript is nice', 'Lua is nice too']), [
  ['JavaScript', 'is', 'nice'],
  ['Lua', 'is', 'nice', 'too'],
]);

// Max
const getHighest = (x, y) => (x > y ? x : y);
const max = reduce(getHighest, 0);

assert.equal(max([10, 20, 30, 100, 50]), 100);

// Slice
const slice = curry((start, end, list) => list.slice(start, end));
assert.deepEqual(slice(1)(3)(['JavaScript', 'TypeScript', 'React', 'Ramba']), [
  'TypeScript',
  'React',
]);

// Take
const take = (end) => slice(0)(end);
assert.deepEqual(take(2)(['JavaScript', 'TypeScript', 'React', 'Ramba']), [
  'JavaScript',
  'TypeScript',
]);
