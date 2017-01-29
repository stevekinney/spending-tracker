import objectToArray from './object-to-array';

it('it should return an array with the propery as the "key" property', () => {
  expect(objectToArray({ a: { x: 1 }, b: { x: 2 } })).toEqual([{ key: 'a', x: 1 }, { key: 'b', x: 2 }]);
});

it('should take a second argument as a "key" property', () => {
  expect(objectToArray({ a: { x: 1 }, b: { x: 2 } }, 'id')).toEqual([{ id: 'a', x: 1 }, { id: 'b', x: 2 }]);
});
