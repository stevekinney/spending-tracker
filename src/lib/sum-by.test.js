import sumBy from './sum-by';

it('calculate the sum of a array of objects by property', () => {
  const objects = [{ a: 1 }, { a: 2 }, { a: 3 }];
  expect(sumBy('a')(objects)).toEqual(6);
});

