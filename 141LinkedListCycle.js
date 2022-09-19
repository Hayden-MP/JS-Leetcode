/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/* LinkedList Cycle:
        - Return true if the linked list has a node that points back to an earlier node
        - Return false if the linked list does not have a cycle
*/

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;               
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

// Test data
let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

let list = new LinkedList(node1);
console.log(list);

// Leetcode function - the way we will go about this is there will be two pointers,
//      - One pointer will be fast (skipping steps) and the other will be slow (step by step)
//      - If the fast pointer reaches the end, it will be null and the loop will break, return false
//      - But if the fast pointer ends up on the same node as the slow pointer, it means it has
//          gone in a circle, and thus is a circular linked list. Return true
var hasCycle = function(head) {
    
    if(!head) {
        return false; // If head is null, there is no cycle
    }

    let fastPointer = head;
    let slowPointer = head;

    while(fastPointer) { // While fastPointer != null
        if(!fastPointer.next) { // If the next node after fastPointer is null, return false (no cycle)
            return false;
        } else {
            fastPointer = fastPointer.next.next; // Fast pointer skips steps
            slowPointer = slowPointer.next; // Slow pointer goes one step at a time
        }

        if(fastPointer === slowPointer) { // A cycle is found, fast pointer has "lapped" slow pointer
            return true;
        }
    }
    return false; // Fast pointer is null (no cycle)
};

console.log(hasCycle(list.head));