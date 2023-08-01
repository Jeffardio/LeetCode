/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let maxArea = 0
    for(let i = 0; i < height.length; i++){
        h = height[i]
        let startIndex = Math.floor(maxArea / h)
        
        for(let j = i+startIndex; j < height.length; j++){
            maxArea = Math.max(
                maxArea,
                (
                    (j - i) * (Math.min(h, height[j]))
                )
            )
        }
    }
    return maxArea
};

console.log(maxArea([1,2]))