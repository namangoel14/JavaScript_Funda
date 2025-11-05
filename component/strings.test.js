const strings = require('./strings');
test('there is no I in team', () => {
  expect(strings('team')).not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect(strings('Christoph')).toMatch(/stop/);
});