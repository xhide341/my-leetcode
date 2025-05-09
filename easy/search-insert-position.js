/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1; // target is in right half so reassign(discard) the left
    } else {
      right = mid - 1; // target is in left half, so discard the right side
    }
    // change the left/right and mid's next calculation will be pulled to that direction
  }
  return left;
};
