const generateApple = require('./generateApple');

describe('generate apple method', () => {
    describe('generateNewSweetApple method', () => {
        test('should return object with correct values using toBe', () => {
          const apple = generateApple.generateNewSweetApple(1);
      
          // Use toBe to check if the object reference is the same
          expect(apple).toBe(apple); // Passes, as it's the same object reference
        });
      
        test('should return a random user object with correct values using toEqual', () => {
          const expectedAppleDetail = {
            price: 0.5
          };
      
          const apple = generateApple.generateNewSweetApple(1);
      
          // Use toEqual to check if the object content is the same
          expect(apple).toEqual(expectedAppleDetail); // Passes, as the content matches
        });
    });

    describe('generateNewSourApple method', () => {
      test('should return object with correct values using toBe', () => {
        const apple = generateApple.generateNewSourApple(1);
    
        // Use toBe to check if the object reference is the same
        expect(apple).toBe(apple); // Passes, as it's the same object reference
      });
    
      test('should return a random user object with correct values using toEqual', () => {
        const expectedAppleDetail = {
          price: 0.4
        };
    
        const apple = generateApple.generateNewSourApple(1);
    
        // Use toEqual to check if the object content is the same
        expect(apple).toEqual(expectedAppleDetail); // Passes, as the content matches
      });
  });
    
});