class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = {};

        for (let i = 0; i < nums.length; i++) {

            if (map[nums[i]] === undefined) {
                map[nums[i]] = 1;
            } else {
                map[nums[i]]++;
            }
            if (map[nums[i]] > nums.length / 2) {
                return nums[i];
            }

        }
    }
}
