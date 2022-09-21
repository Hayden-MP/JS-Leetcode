/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    
    if(!head) {
        return head; // If list is empty, return null
    }
    
    // Three pointers, start, prev, curr
    let start = new ListNode(-1, head); // "dummy" node points to head, helps with removing nodes at start of list
    let prev = start;
    let curr = head;

    
    // Iterate through list to find val matches
    while(curr) { // While current is not null
        
        // If there is a match
        if(curr.val === val) {
            prev.next = curr.next; // Set prev next to node after curr, do not move prev
            curr = curr.next;      // Set curr to the next node
            
        } else { // No match
            // Step through list as normal
            prev = curr;
            curr = curr.next;
            
        } 
    }
    
    return start.next;
};