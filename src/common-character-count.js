const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Chars = {};
  const s2Chars = {};
  let commonCount = 0;

  // count characters in s1 and s2
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    s1Chars[char] = (s1Chars[char] || 0) + 1;
  }
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    s2Chars[char] = (s2Chars[char] || 0) + 1;
  }

  // find common characters
  for (const char in s1Chars) {
    if (char in s2Chars) {
      commonCount += Math.min(s1Chars[char], s2Chars[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
