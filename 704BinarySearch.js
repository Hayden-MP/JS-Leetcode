/* Binary Search:
        - Binary search works on SORTED lists/arrays
        - It continuously divides the list in half to search for the target
        - Uses two pointers, one on the right (midpoing or rightmost index) and 
            one on the left (midpoint or leftmost index)
*/
var search = function(nums, target) {
    
    // Check to see if nums.length == 1
    if (nums.length === 1) {
        if(target === nums[0]) return 0;
        return -1;
    }

    // Create variables for pointers "left" and "right" for each side of midpoint
    let left = 0; 
    let right = nums.length - 1;

    // while left pointer is <= to right pointer
    while(left <= right) {
        // Midpoint variable = math.floor((right + left) / 2) - the average
        let midpoint = Math.floor((left+right)/2);
        let middleElement = nums[midpoint];

        if (middleElement === target) {
            return midpoint;
        } else if (middleElement > target) {
            right = midpoint - 1; // -1 because we dont want to search the same index again
        } else {
            left = midpoint + 1;
        }
    }

    return -1; // No match was found

};