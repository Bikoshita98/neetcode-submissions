class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let l = s.length;
        let halfLength = Math.floor(l/2);
        let temp = 0;

        for(let i = 0; i<halfLength; i++){
            temp = s[i];
            s[i] = s[l-1-i];
            s[l-1-i] = temp;
        }
    }
}
