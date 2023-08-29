// rectangleUtils.js
function calculateRectangleArea(length, height) {
    if (length <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }
    return length * height;
  }
  
module.exports = calculateRectangleArea;