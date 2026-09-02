class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let s = 0;
        let e = nums.length-1;
        let mid = 0;

        while(s<=e){
            mid = Math.floor((s+e)/2);

            if(nums[mid] == target){
                return mid;
            } else if(target<nums[mid]){
                e = mid-1;
            } else {
                s = mid+1;
            }
        }
        return -1;
    }
}
