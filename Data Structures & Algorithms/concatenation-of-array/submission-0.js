class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        let ans = new Array(2 * n);
        let m = ans.length;

        let p1 = 0, p2 = n;

        while (p1 < n && p2 < m) {
            ans[p1] = nums[p1];
            ans[p2] = nums[p1];
            p1++; p2++;
        }

        return ans;
    }
}
