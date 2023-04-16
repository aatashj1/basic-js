const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
// Split the input string into an array of its six groups of two hexadecimal digits
  const groups = n.split('-');

  // Check that there are exactly six groups
  if (groups.length !== 6) {
    return false;
  }

  // Check that each group contains only valid hexadecimal digits
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    if (!/^[0-9A-Fa-f]{2}$/.test(group)) {
      return false;
    }
  }

  // If we made it here, the input string is a valid MAC-48 address
  return true;
}
module.exports = {
  isMAC48Address
};
