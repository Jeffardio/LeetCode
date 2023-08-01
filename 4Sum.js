/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

function sum(nums, vals){
    let sum = 0
    for(let i = 0; i < vals.length; i++){
        sum+=nums[vals[i]]
    }
    return sum
}

function increment(vals, max){
    if(equals(vals, max)){
        return
    }
    for(let i = vals.length - 1; i >= 0; i--){
        if(vals[i] === max[i] ){
            vals[i] = vals[i-1] + 1 
        } else {
            vals[i] += 1
            for(let j = i;j < vals.length - 1; j++){
                if(vals[j] <= vals[j+1]){
                    vals[j+1] = vals[j] + 1
                }
                
            }
            return
        }
    }
    
}

function equals(a1, a2){
    for(let i = 0; i < a1.length; i++){
        if(a1[i] !== a2[i]) return false
    }
    return true
}


function removeUpTo4(nums){
    let c = {}
    for(let i = 0; i < nums.length; i++){
        if(c[nums[i]] === undefined) c[nums[i]] = [nums[i]]
        else if (c[nums[i]].length < 4) c[nums[i]].push(nums[i])
    }
    let nNums = []
    for(let [k,v] of Object.entries(c)){
        nNums.push(...v)
    }
    return nNums
}

var fourSum = function(nums, target) {
    if(nums.length < 4) {return []}

    nums = removeUpTo4(nums)
    let vals = Array(4).fill().map((_,idx) => idx)
    vals[3] = vals[3]-1
    
    const max = Array(4).fill().map((_, idx) => nums.length - (4 - idx))
    let all = []
    let res = []

    do{
        increment(vals, max)

        if(sum(nums, vals) === target){
            const n = []
            for(let i = 0; i < vals.length; i++){
                n.push(nums[vals[i]])
            }         
            n.sort((a,b) => a-b)   
            let flag = true

            for(let i = 0; i < res.length; i ++) {
                for(let j = 0; j < res.length; j++){
                    if(equals(n, res[j])){
                        flag = false
                        break
                    } 
                }
                if(!flag) break
            }
            if(flag) {
                res.push(n)
            }

            console.log(vals)
        }
    }while(!equals(vals,max))

    
    
    
    
    return res
};


console.log(fourSum([1,0,-1,0,-2,2],0))