let dict = { 
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
}

/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let digits = num.toString().split("")
    console.log(digits)
    let string = ""
    if (digits.length == 4){
        for(let i = 0; i < parseInt(digits[0]); i++){
            string+="M"
        }
        digits.splice(0,1)
    }

    if(digits.length == 3) {
        let num = parseInt(digits[0]) 
        if (num == 9){
            string += "CM"
            num = num - 9
        }
        else if (num - 5 >= 0){
            string += "D"
            num = num - 5
        }
        else if (num - 4 >= 0){
            string += "CD"
            num = num - 4
        }
        for(let i = 0; i < num; i++){
            string+="C"
        }
        digits.splice(0,1)       
    }
    if(digits.length == 2) {
        let num = parseInt(digits[0]) 
        if (num == 9 ){
            string += "XC"
            num = num - 9
        }
        else if (num - 5 >= 0){
            string += "L"
            num = num - 5
        }
        else if (num - 4 >= 0){
            string += "XL"
            num = num - 4
        }
        for(let i = 0; i < num; i++){
            string+="X"
        }
        digits.splice(0,1)       
    }
    if(digits.length == 1) {
        let num = parseInt(digits[0]) 
        if (num == 9){
            string += "IX"
            num = num - 9
        }
        else if (num - 5 >= 0){
            string += "V"
            num = num - 5
        }
        else if (num - 4 >= 0){
            string += "IV"
            num = num - 4
        }
        for(let i = 0; i < num; i++){
            string+="I"
        }
        digits.splice(0,1)       
    }
    return string.toString()

};

intToRoman(1990)