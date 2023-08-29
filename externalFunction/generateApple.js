function generateNewSweetApple(quantity) {
  const price = quantity* 0.5
  return {
    price
  }
}

function generateNewSourApple(quantity) {
  const price = quantity* 0.4
  return {
    price
  }
}


module.exports = {generateNewSweetApple, generateNewSourApple};