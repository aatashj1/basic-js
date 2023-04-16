const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix ) {
  const zeroColumns = new Set(); // set to keep track of columns with a zero element
  let sum = 0; // variable to keep track of the sum

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // if the current column has a zero element, skip it
      if (zeroColumns.has(col)) {
        continue;
      }

      // add the current element to the sum
      sum += matrix[row][col];

      // if the current element is zero, mark the column as having a zero element
      if (matrix[row][col] === 0) {
        zeroColumns.add(col);
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
