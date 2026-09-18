class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let result = [];

        //step 1: iterate the array till i=4 
        for (let i = 0; i < nums.length - 2; i++) {

            //skip iteration if duplicates
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let L = i + 1;
            let R = nums.length - 1;

            while (L < R) {
                const sum = nums[i] + nums[L] + nums[R];

                if (sum === 0) {
                    result.push([nums[i],nums[L],nums[R]]);
                    L++;
                    R--;

                    //skip iteration if duplicate L
                    while (L < R && nums[L] === nums[L - 1]) {
                        L++;
                    }

                    //skip iteration if duplicate R
                    while (L < R && nums[R] === nums[R+1]) {
                        R--;
                    }
                } else if (sum < 0) {
                    L++;
                } else {
                    R--;
                }
            }
        }
        return result;
    }
}
