/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // Define a hashmap with each valid combination
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Define an empty stack to push and pull from
  // We will use this to check if the chosen combination (discovered by iterating linearly) is valid
  let stack = [];

  // Iterate through the array for each character
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      // If the current index is an opening character,
      stack.push(s[i]); // Store it in the stack
    } else if (stack[stack.length - 1] === map[s[i]]) {
      // Now, we check if the last character of the stack is the same as the "complimentary" opening character produced from the hashmap,
      stack.pop(); // If they "match", remove it from the stack
    } else return false; // Otherwise, the last el of the stack does not match so we immediately return false
  }
  return stack.length ? false : true; // Now, if we end with the stack with remaining elements, we know it does not have a match and therefore false. Otherwise, true since everything has been paired
};
