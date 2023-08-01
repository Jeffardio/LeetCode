/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const res = Array(numRows).fill().map(_ => Array(s.length).fill(""))
    let currCol = 0
    for(let i = 0; i < s.length;){
        for(let j = 0; j < numRows; j++){
            res[j][currCol] = s[i]
            i++
        }
        currCol++
        
        for(let j = numRows-2; j > 0 ; j--){
            console.log(s[i])
            res[j][currCol] = s[i]
            i++
            currCol++
        }
            
    }
    return res.map(x => x.join("")).join("")
    
};

console.log(convert("PAYPALISHIRING", 4))