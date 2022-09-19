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
 var reverseList = function(head) {
    
    // want: head > 1 > 2 > 3 > 4 > 5 > null TO BE null < 1 < 2 < 3 < 4 < 5 < head
    if(!head) {
        return head;
    }
        
    // get prevNode, currentNode, and nextNode
    let prevNode = null;
    let currentNode = head;
    let nextNode;
    
    while(currentNode) { // While currentNode does not = Null
        
        // Update next
        nextNode = currentNode.next;
        
        // Let prevNode <- currentNode
        currentNode.next = prevNode;
        
        // Update pointers
        prevNode = currentNode;
        currentNode = nextNode;
        
    }
    
    return prevNode;
    
};