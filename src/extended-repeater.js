const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = String(options.addition);
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  let additionStr = '';
  if (addition) {
    const additionArr = new Array(additionRepeatTimes).fill(addition);
    additionStr = additionArr.join(additionSeparator);
  }

  const strArr = new Array(repeatTimes).fill(str + additionStr);
  return strArr.join(separator);
}

module.exports = {
  repeater
};
