const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // if(arr.filter(elem => typeof elem === "string").length === 0) { return arr; }
  // if(arr.length === 0) { return []; }
  // const controls = ["--discard-prev", "--discard-next", "--double-prev", "--double-next"];
  // if(Object.prototype.toString.call(arr) === '[object Array]';) { return "\'arr\' parameter must be an instance of the Array!"; }
  // let index;
  // function discard(control, n) {
  //   const array = [];
  //   if(arr.indexOf(control) === 0) { return array; }
  //   index = arr.indexOf(control);
  //   for(let item of arr) {
  //     if(item === control || item === arr[index + n]) {
  //       continue;
  //     }
  //     else { array.push(item); }
  //   }
  //   return array;
  // }
  // function double(control, n) {
  //   const array = [];
  //   const array2 = new Array(...arr);
  //   index = array2.indexOf(control);
  //   for(let item of array2) {
  //     if(item === control && arr.indexOf(control) === arr.length-1) { continue; }
  //     else {
  //       if(item === control) {
  //         array.push(array2[index]);
  //       }
  //       else { array.push(item); }
  //     }
  //   }
  //   return array;
  // }
  // if(arr.includes(controls[0])) { return discard(controls[0], -1); }
  // else if(arr.includes(controls[1])) { return discard(controls[1], 1); }
  // else if(arr.includes(controls[2])) { return double(controls[2], -1); }
  // else if(arr.includes(controls[3])) { return double(controls[3], 1); }
}
// console.log(transform(123));
module.exports = {
  transform
};