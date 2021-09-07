//Products of Digits of Sum


function sumDigProd(...args) {

    let str = args.toString()

    if (str.length === 1){
        return parseInt(str)
    }

    else{
        let initSum = args.reduce((sum, currentValue) => {
            return sum + currentValue;
        }, 0);

        let digits = initSum.toString().split("")

         while (digits.length > 1){
            let nums = []
            for (let i = 0; i < digits.length; i++){
                nums.push(parseInt(digits[i]))
            }
            
            let mult = nums.reduce((accumulator, currentValue) => accumulator * currentValue);
            
            digits = mult.toString().split("")
        }   
         return parseInt(digits)   
    }

	
}




console.log(sumDigProd(16, 28)) // 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6


console.log(sumDigProd(0)) // 0

console.log(sumDigProd(16)) // 6


console.log(sumDigProd(1, 2, 3, 4, 5, 6)) //2