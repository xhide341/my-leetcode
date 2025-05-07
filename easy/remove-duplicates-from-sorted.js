/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let unique = 1; // start at 2nd elem

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {// if not same as previous,
            nums[unique] = nums[i]; // add it to available unique position
            unique++; // increase unique counter
        }
    }

    return unique;
};