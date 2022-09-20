/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    
    // Using fast and slow pointers, we can get to the midpoint and end
    let fast = head;
    let slow = head;
    
    // start pointer will start at the beginning of the list
    let start = head;
    
    // Get to the midpoint of the list using Floyds algorithm
    while(fast) {
        
        if(!fast.next) {
            break;
        } else if (!fast.next.next) {
            slow = slow.next;
            break;
        }
        
        fast = fast.next.next;
        slow = slow.next;
    }
    
    // Slow will be pointing to the middle of the list now, reverse the list
    let prevNode = null;
    let currentNode = slow;
    let nextNode;
    
    while(currentNode) {
        
        // Update next
        nextNode = currentNode.next;
        
        // Want current to point to previous
        currentNode.next = prevNode;
        
        // Want prevNode to now point to current
        prevNode = currentNode;
        
        // Want current to now  be the next in list
        currentNode = nextNode;
    }
    
    // prevNode will now point to the end of the linked list, pointing backwards to midpoint
    while(prevNode) {
        
        // Compare prevNode and startNode for however long prevNode remains non-null
        if (prevNode.val !== start.val) {
            return false;
        }
        
        prevNode = prevNode.next;
        start = start.next;
    }
    
    return true;
};