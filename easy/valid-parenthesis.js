/**
 * @param {string} s
 * @return {boolean}
 */

const bracketMap = { ")": "(", "]": "[", "}": "{" };

var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (bracketMap[s[i]]) {
      // if it is a closing, pop
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (top !== bracketMap[s[i]]) {
        return false;
      }
    } else {
      // else, consider it an opening then push
      stack.push(s[i]);
    }
  }
  return true;
};
