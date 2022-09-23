/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
    
    // Since letters is sorted, binary search can be used to find target
    let left = 0;
    let right = letters.length;
    
    
    while (left <= right) {
        const middle = left + Math.floor((right-left)/2);
        console.log("Middle=",middle);
        
        if(letters[middle] <= target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    
    console.log("\nLeft:",left);

    // Check to see if left is at the far end of the array, if so, return letters[0]
    if (left === letters.length) {
        return letters[0];
    } else { // If not, returns the character after 
        return letters[left];  
    }
};


console.log(nextGreatestLetter([1,2,3,4,5,6,7,8], 3));