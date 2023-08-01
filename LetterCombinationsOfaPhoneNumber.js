/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    } 
    let res = [""]
    
    let pressed = []
    for(let i = 0; i < digits.length; i++){
        const l = res.length
        for(let x = 0; x < l; x ++){
            for(let j = 0; j < keyboard[digits[i]].length; j++){
                res.push(res[0] + keyboard[digits[i]][j])
            }
            res.shift()
        }

        
        
    }
    if(res.length === 1) return []
    return res
    
};

console.log(letterCombinations("23"))