/**
 * @param {string} s
 * @return {number}
 */

const romanMap = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

var romanToInt = function (s) {
  let total = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const currentValue = romanMap.get(s[i]);
    const nextValue = romanMap.get(s[i + 1]);
    if (currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }
  total += romanMap.get(s[s.length - 1]);
  return total;
};
