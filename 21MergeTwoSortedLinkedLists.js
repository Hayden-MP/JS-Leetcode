/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    
    // First check lengths of lists, if either are empty, return the other
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    
    // merged will be new head of merged list (dummy node)
    let merged = new ListNode('a');
    
    // prev pointer, will follow the stream of pointers 
    let prev = merged;
    
    // While there are values in both lists...
    while(list1 && list2) {
        
        // Check values to see if l1 is <= l2
        if (list1.val <= list2.val) { // If list1.val is equal or smaller, set prev to list1 and move list1
            prev.next = list1;
            list1 = list1.next;
            
        } else if (list2.val <= list1.val) { // If list2.val is equal or smaller than list1, set prev to list2 and move list2
            prev.next = list2;
            list2 = list2.next;
            
        }
        
        prev = prev.next;
    }
    
    // One list ran out of values, lets check to see which one
    if (!list1) { // list1 ran out, attach the rest of list2 to merged
        prev.next = list2;
    } else if(!list2) { // list2 ran out, attach the rest of list1 to merged
        prev.next = list1;
    }
    
    
    return merged.next;   
};