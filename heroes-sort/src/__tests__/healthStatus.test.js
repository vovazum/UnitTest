import determineHealthStatus from '../healthStatus';

describe('determineHealthStatus', () => {
  test('returns "healthy" for health > 50', () => {
    expect(determineHealthStatus({ health: 90 })).toBe('healthy');
  });

  test('returns "wounded" for 15 <= health <= 50', () => {
    expect(determineHealthStatus({ health: 30 })).toBe('wounded');
  });

  test('returns "critical" for health < 15', () => {
    expect(determineHealthStatus({ health: 10 })).toBe('critical');
  });
});
