// Library declaration 
const math = {
  getRandomNumber(min = 0, max = 0) {
    min = typeof min === 'number' && Number.isInteger(min) ? min : 0;
    max = typeof max === 'number' && Number.isInteger(max) ? max : 0;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};

module.exports = math; // library export 