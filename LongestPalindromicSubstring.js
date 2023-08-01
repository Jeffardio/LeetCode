/**
 * @param {string} s
 * @return {string}
 */

function check(s){
    return s === s.split("").reverse().join("")
}

var longestPalindrome = function(s) {
    const length = s.length
    let res = ""
    for(let i = 0; i < length ; i++){
        for(let j = i+1; j < length - j; j++){
            let currSub = s.substring(i,j)
            if(check(currSub) && currSub.length > res.length){
                res = currSub
            }
        }
    }
    return res
}

console.log(longestPalindrome("babad"))