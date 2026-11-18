/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let maxSum = -Infinity;

        function dfs(node){
            if(node === null){
                return 0;
            }

        //maximum contribution from left and right

        let leftGain = Math.max(0, dfs(node.left));
        let rightGain = Math.max(0, dfs(node.right));

        //maximum path passing through current node

        let currentPathSum = node.val + leftGain + rightGain;

        //update global maximum
        maxSum = Math.max(maxSum, currentPathSum);

        return node.val+Math.max(leftGain,rightGain)
        }


        dfs(root);
        return maxSum;
    }
}
