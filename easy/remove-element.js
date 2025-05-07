/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;

  // created k as a new index for the array
  // used k as means to replace the position with new value
  // if nums[i] is not equal to value (meaning it is not the target to be removed)
};
