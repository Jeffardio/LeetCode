var threeSum = function(nums) {
    nums.sort((a,b)  => a-b)
    
    let sol = []
    let last = [-10e5, -10e5, -10e5]
    let f;
    let last_i = -10e5
    let last_j = -10e5
    for(let i = 0; i < nums.length; i++){
        if(last_i == nums[i]){
            continue
        }
        if(nums[i] > 0){
            console.log(sol)
            return sol
        }
        last_i = nums[i]
        last_j = -10e5
        for(let j = i+1; j < nums.length; j++){
            if(last_j == nums[j]){
                continue
            }
            if((nums[i] + nums[j]) > 0){
                break
            }
            last_j = nums[j]
            for(let y = j+1; y<nums.length; y++ ){
                if((nums[i] + nums[j] + nums[y]) == 0){
                    f = [nums[i], nums[j], nums[y]]
                    if  ((last[0] == f[0] && last[1] == f[1] && last[2] == f[2])){
                        break
                    }  
                    else{
                        last = f
                        sol.push(f)
                        console.log(f)
                    }
                }
                else if((nums[i] + nums[j] + nums[y]) > 0){
                    break
                }
                
            }
        }
    } 
    
    return sol
};

const obj = {
    diocane : 1,
    d: 2
}

console.log(obj.d)