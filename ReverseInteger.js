/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x < 0 ){
        let res = Number("-" + String(x).substring(1).split("").reverse().join(""))
        if(res * 2 / 2 != res) return 0
        return res
    }
        
    else {
        let res = Number(String(x).split("").reverse().join(""))
        console.log(res *2)
        if(res * 2 / 2 != res) return 0
        return res
    }
};

console.log(Number("0001"))
console.log(reverse(1534236469))