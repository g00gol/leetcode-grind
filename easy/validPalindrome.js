/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var string = s.replaceAll(/[^a-z0-9]/gi, "").toLowerCase();
  var array = string.split("");
  // console.log(array.reverse().join(""))
  return array.reverse().join("") === string;
};
