class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = new Array(nums.length).fill(1);

        let left = 1;

        // Calculate left products
        for (let i = 0; i < nums.length; i++) {
            output[i] = left;
            left *= nums[i];
        }

        let right = 1;

        // Calculate right products
        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= right;
            right *= nums[i];
        }

        return output;
    }
}
