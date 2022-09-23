/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var sortedSquares = function(nums) {

    if(nums.length === 1) {
        nums[0] = nums[0] * nums[0];
        return nums;
    }
    
    // Two pointers, two variables
    let left = 0; // Points to beginning of nums
    let right = nums.length - 1; // Points to end of nums

    let result = Array(nums.length).fill(0); // To store sorted squares in
    let resultIndex = result.length - 1; // Will enter largest squares first at the end

    for(resultIndex; resultIndex >= 0; resultIndex--) {

        const squaredLeft = nums[left] * nums[left];
        const squaredRight = nums[right] * nums[right];

        if(squaredLeft >= squaredRight) {
            // Insert left square first
            result[resultIndex] = squaredLeft;
            left++;
            continue;
        } else {
            // insert right square first
            result[resultIndex] = squaredRight;
            right--;
            continue;
        }
    }

    return result;
};

console.log(sortedSquares([-5,-1,0,2,4]));