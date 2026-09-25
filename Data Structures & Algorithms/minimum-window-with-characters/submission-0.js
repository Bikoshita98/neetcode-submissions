class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return "";
        }

        let have = new Map();
        let left = 0;
        let formed = 0;
        let minLength = Infinity;
        let minStart = 0;

        //what characters do we need?
        let need = new Map();

        for (let char of t) {
            need.set(char, (need.get(char) || 0) + 1);
        }

        let required = need.size        //unique number of charactes AABC = 3 NOT 4

        for (let right = 0; right < s.length; right++) {
            let char = s[right];

            //add current character to our window
            have.set(char, (have.get(char) || 0) + 1);

            //did this character satisfy one requirement?
            if (need.has(char) && have.get(char) == need.get(char)) {
                formed++;
            }

            while (formed == required) {
                //check if this is the smallest window
                let windowLength = right - left + 1;

                if (windowLength < minLength) {
                    minLength = windowLength;
                    minStart = left;
                }


                //remove left character
                let leftChar = s[left];
                have.set(leftChar, have.get(leftChar) - 1);

                //Did removing it break a requirement?
                if (need.has(leftChar) && have.get(leftChar) < need.get(leftChar)) {
                    formed--;
                }
                left++;
            }
        }

        if (minLength === Infinity) {
            return "";
        }

        return s.substring(minStart, minStart + minLength);
    }
}
