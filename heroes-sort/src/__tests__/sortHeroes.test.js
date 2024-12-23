import sortHeroesByHealth from '../sortHeroes';

describe('sortHeroesByHealth', () => {
  test('sorts heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const sortedHeroes = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    expect(sortHeroesByHealth(heroes)).toEqual(sortedHeroes);
  });
});
