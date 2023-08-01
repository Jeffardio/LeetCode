/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    let closest = undefined;
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1;j < nums.length; j++){
            for(let x = j + 1; x < nums.length; x++){
                let sum = nums[i] + nums[j] + nums[x]


                if(closest === undefined || Math.abs(target-sum) < Math.abs(target-closest)){
                    closest = sum
                }
            }

        }
    }
    return closest
};



console.log(threeSumClosest([-1,2,1,-4],1))