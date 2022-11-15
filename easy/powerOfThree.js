/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return (Math.log(n) / Math.log(3)).toFixed(12) % 1 == 0;
};
