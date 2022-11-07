/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  for (let i = 0; i < t.length; i++) {
    // if (s.length == 0) return true;
    if (s.indexOf(t[i]) != -1) {
      s = s.replace(t[i], "");
      // console.log(s, s.length);
      if (s.length == 0 && i == t.length - 1) return true;
    } else {
      return false;
    }
  }
};
