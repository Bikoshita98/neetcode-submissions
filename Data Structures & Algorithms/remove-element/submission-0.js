class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let x = 0;
        let temp = 0;

        for (let i = 0; i<nums.length; i++){
            if(nums[i]!=val){
                temp = nums[i];
                nums[x] = nums[i];
                nums[i] = temp;
                x++;
            }
        }
        return x;
    }
}
