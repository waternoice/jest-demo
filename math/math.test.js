const math = require('./math')

describe('math file', () => {
  describe('add', () => {
    test('should add two numbers correctly', () => {
      const result = math.add(2, 3);
      expect(result).toBe(5);
    });
  
    test('should handle negative numbers', () => {
      const result = math.add(-1, -5);
      expect(result).toBe(-6);
    });
  });
})
