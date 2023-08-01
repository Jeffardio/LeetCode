/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    try{
        let i = 0
        while(s[i] === ' ')
            i++
        let start = s.substring(i)
        let sign = 1
        if(start[0] === "-"){
            sign = -1
            start = start.substring(1)
            
        } else if (start[0] === "+"){
            start = start.substring(1)
        }
        i = 0
        
        let res = "0"
        while(!isNaN(parseInt(start[i]) )){
            console.log(start[i])
            res = res + start[i]
            i++
        }
        if(sign == -1)
            return Math.max( sign* Number(res), -Math.pow(2, 31))
        else
            return Math.min( Number(res), Math.pow(2, 31)-1)
    } catch(e){
        return 0
    }
    
    
};

console.log(parseInt("a"))

console.log(myAtoi("   +0 123"

))