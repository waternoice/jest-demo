// rectangleUtils.test.js
const calculateRectangleArea = require('./area');

describe('calculateRectangleArea', () => {
  test('should calculate the area of a rectangle with positive dimensions', () => {
    const area = calculateRectangleArea(5, 10);
    expect(area).toBe(50);
  });

  test('should handle a rectangle with negative height', () => {
    expect(() => calculateRectangleArea(5, -10)).toThrow('Width and height must be positive numbers');

  });
});
