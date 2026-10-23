/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
reorderList = function(head) {
    if (!head || !head.next) {
        return;
    }

    // Step 1: Find the middle
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Split the list
    let second = slow.next;
    slow.next = null;

    // Step 3: Reverse the second half
    let prev = null;
    let curr = second;

    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    // Step 4: Merge both halves
    let first = head;
    second = prev;

    while (second) {
        let firstNext = first.next;
        let secondNext = second.next;

        first.next = second;
        second.next = firstNext;

        first = firstNext;
        second = secondNext;
    }
};
}
