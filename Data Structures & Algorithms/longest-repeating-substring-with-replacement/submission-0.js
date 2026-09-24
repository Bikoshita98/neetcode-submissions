class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Array(26).fill(0);

        let left = 0;
        let maxFreq = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {

            // Convert character to index: A -> 0, B -> 1, ..., Z -> 25
            let index = s.charCodeAt(right) - 65;

            //increase frequency of current character
            count[index]++;

            //keep track of the most frequent character
            maxFreq = Math.max(maxFreq,count[index]);

            // If replacements needed > k, shrink the window
            while((right-left+1) - maxFreq > k) {
                let leftIndex = s.charCodeAt(left) - 65;
                count[leftIndex]--;
                left++;
            }

            //update maximum valid window length

            maxLength = Math.max(maxLength,right-left+1);
        }

        return maxLength;
    }
}
