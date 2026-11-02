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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root == null) {
            return [];
        }

        let result = [];
        let queue = [root];

        while (queue.length) {
            let levelSize = queue.length;
            let currentLevel = [];

            for (let i = 0; i < levelSize; i++) {
                let node = queue.shift();

                currentLevel.push(node.val);

                if (node.left !== null) {
                    queue.push(node.left);
                }

                if (node.right !== null) {
                    queue.push(node.right);
                }
            }
            result.push(currentLevel);
        }
        return result;
    }
}
