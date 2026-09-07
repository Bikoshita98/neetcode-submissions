class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";

        for (let str of strs) {
            encodedStr+= str.length + "#" + str;
        }
        
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        let decodedStr = [];
        let i = 0;

        while (i < s.length) {
            let j = i;

            while (s[j] !== "#") {
                j++;
            }

            let length = Number(s.substring(i, j));
            j++;
            decodedStr.push((s.substring(j, j + length)));
            i = j + length;
        }

        return decodedStr;
    }
}
