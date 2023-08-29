const math = require('./totalCost')
const generateApple = require('../externalFunction/generateApple');

describe('totalCost', () => {
    test('total cost call generateNewSweetApple and generateNewSourApple', () => {
      jest.spyOn(generateApple, 'generateNewSweetApple').mockReturnValue({
        price: 0.5
      });
      jest.spyOn(generateApple, 'generateNewSourApple').mockReturnValue({
        price: 0.4
      });
  
      const price = math.totalCost(1, 2);
      expect(generateApple.generateNewSourApple).toHaveBeenCalledWith(2);
      expect(generateApple.generateNewSweetApple).toHaveBeenCalled()
  
      expect(price).toBe(0.9);
    });
});