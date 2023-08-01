/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let dict = {
        "O" : 0,
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M":  1000
    }
    let chars = s.split("")
    let sum = 0
    let curr_sum = 0
    let last_char = "O"
    let integers = chars.map((c) => dict[c])
    for(let i = 0; i < integers.length-1; i++){
        
        let j = i
        while (integers[j] == integers[j+1]) {
            j++
        }
        if (integers[j] < integers[j+1]){
            integers[i] = -1 * integers[i]
        }
        
    }
    
    return integers.reduce((curr, prev) => curr+prev ,0)
};

console.log(romanToInt("MCMXCIV"))


"MCM"
