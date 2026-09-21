class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left =0;
        let right = heights.length-1;
        let maxWater = 0;

        while(left < right){
            //width between the two walls
            const width = right-left;
            const containerHeight = Math.min(heights[left],heights[right]);

            //calculate the container area
            const area = width*containerHeight;

            //keep the maximum area found so far
            maxWater = Math.max(maxWater,area);

            //move the shorter wall
            if(heights[left]<heights[right]){
                left++;
            } else {
                right--;
            }
        }

        return maxWater;
    }
}
