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
  if (!options.separator) {
    options.separator = "+";
  }

  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }

  if (options.repeatTimes === 1 && !options.addition) {
    return str
  }

  let result = str;
  let feat = options.addition;

  if (typeof options.addition !== "undefined" && options.additionRepeatTimes > 1) {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      if (options.additionSeparator) {
        feat += options.additionSeparator + options.addition;
      } else {
        feat += options.addition;
      }
    }
  }

  for (let i = 1; i < options.repeatTimes; i++) {
    if ( feat) {
      result += feat + options.separator + str;
    } else {
      result += options.separator + str;
    }
  }
  return  feat ? result +  feat : result;

}

module.exports = {
  repeater
};
