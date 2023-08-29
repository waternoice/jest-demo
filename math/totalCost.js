const generateApple = require('../externalFunction/generateApple');

function totalCost(quantity1, quantity2) {
    const sweetApple = generateApple.generateNewSweetApple(quantity1);
    const sourApple = generateApple.generateNewSourApple(quantity2);
    return sweetApple.price + sourApple.price
}

 module.exports = { totalCost };