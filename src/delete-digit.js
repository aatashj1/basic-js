const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n ) {
  let max = 0;
  const digits = n.toString().split('');

  for (let i = 0; i < digits.length; i++) {
    const removed = parseInt(digits.filter((_, j) => j !== i).join(''));
    if (removed > max) {
      max = removed;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
