class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let totalSum = n*(n+1)/2;
        let partialSum = 0;

        for(let i=0; i<n; i++){
            partialSum = partialSum+nums[i];
        }

        return totalSum - partialSum;
    }
}
