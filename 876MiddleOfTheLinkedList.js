/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    
    if(!head.next) {
        return head; // If there is only one node
    }
    
    // Two pointers, one fast one slow
    let fast = head;
    let slow = head;
    
    // Space between pointers will +1 with each iteration
    while(fast) {
        
        if(!fast.next) {
            return slow; // If there is only one node
        }
        if(!fast.next.next) {
            return slow.next;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    
    return slow; 
};