class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        const n = nums.length;

        // Edge case: empty array
        if (n === 0) return 0;

        // x tracks the index of the last confirmed unique element
        // First element is always unique — x starts at 0
        let x = 0;

        // i scans the entire array from beginning to end
        for (let i = 0; i < n; i++) {

            // If current element is GREATER than the last unique element,
            // it is a new unique value (works because array is sorted)
            if (nums[i] > nums[x]) {

                x++;              // move unique pointer to next position
                nums[x] = nums[i]; // place the new unique value there
            }
            // If nums[i] === nums[x], it is a duplicate — do nothing, skip
        }

        // x is the index of the last unique element
        // Total unique count = x + 1 (0-indexed)
        return x + 1;
    }
}
