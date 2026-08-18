class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let filteredString = '';
        s = s.toLowerCase();

        for(let i=0; i<s.length; i++){
            if(s[i].match(/[a-z0-9]/i)){
                filteredString += s[i];
            }
        }
            let revStr = filteredString.split("").reverse().join("");

            return filteredString == revStr;
    }
}
