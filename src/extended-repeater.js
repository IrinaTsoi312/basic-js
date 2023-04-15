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
  let result = [];
  // const optionsList = Object.keys(options);
  // console.log(optionList);
  let n1, substr, s = "+", additionSeparator = "|", n2;
  function repeatTimes(str, n1) {
    n1 = options.repeatTimes;
    for(let i=0; i<n1; i++) {
      result.push(str);
    }
    if(optionsList.includes("additionRepeatTimes")) {
      function additionRepeatTimes(substr, additionSeparator, n2) {
        const arr = [];
        for(let i=0; i<n2; i++) {
          arr.push(substr);
        }
        for(let k=0; k<result.length; k++) {
          if(optionsList.includes("additionSeparator")) {
            result[k] = result[k] += arr.join(`${additionSeparator}`);            
          }
          else {
            for(let k=0; k<result.length; k++) {
              result[k] = result[k] += arr.join("");
            }
          }
        }
        
      }
    }
  };
  function seperator(arr, s) {
    return arr.join(`${s}`);
  };
  
  return result;
}
console.log(repeater("STRING", { repeatTimes: 3, separator: '**', 
addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));
module.exports = {
  repeater
};
