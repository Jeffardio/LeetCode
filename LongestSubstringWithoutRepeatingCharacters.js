//Given a string s, find the length of the longest substring without repeating characters.

/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/


/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let chars = s
    let curr_sol = 0
    for(let i = 0; i < s.length; i++){
        let sol = [chars[i]]
        for(let j = i + 1 ; j < s.length; j++){
            if (!sol.includes(chars[j])){
                sol.push(chars[j])
            }
            else {
                break
            }
        }
        curr_sol  = Math.max(curr_sol, sol.length)
        if(curr_sol >= s.length - i)
            break
    }

    return curr_sol
};