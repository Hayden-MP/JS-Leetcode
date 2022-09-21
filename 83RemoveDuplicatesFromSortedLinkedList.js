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
 var deleteDuplicates = function(head) {
    
    // If list is empty, return head
    if(!head) {
        return head;
    }
    
    // Three pointers, start(dummy), prev, curr
    let start = new ListNode('a', head);
    let prev = start;
    let curr = head;
    
    // iterate through list node by node
    while(curr) {
        
        // Check to see if values match curr and prev
        if (prev.val === curr.val) {
            // If so, set prev.next to curr.next to delete the node
            prev.next = curr.next;
            curr = curr.next; // Move curr, do not move prev
            
        } else { // Iterate as normal
            prev = curr;
            curr = curr.next;
        }
    }
    
    return start.next;
    
};