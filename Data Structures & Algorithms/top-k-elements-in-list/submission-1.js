class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};

        for(let num of nums){
            count[num] = (count[num] || 0)+1;
        }

        let buckets = Array.from(
             { length: nums.length + 1 },
            ()=>[]
        )

        for(let num in count){
            let frequency = count[num];
            buckets[frequency].push(Number(num));
        }

        let result = [];
        for(let freq=buckets.length-1;freq>=0;freq--){
            for(let num of buckets[freq]){
                result.push(num);

                if(result.length ===k){
                    return result;
                }
            }
        }

    }
}
