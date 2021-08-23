function oddishOrEvenish(num) {
    let digitSt = num.toString()
    let digits = []

    for (let i = 0; i < digitSt.length; i++){
        digits.push(parseInt(digitSt[i]))
    }
    
    const total = digits.reduce((sum, currentValue) => {
        return sum + currentValue;
    }, 0);
    
    if ((total % 2) === 1){
        return "Oddish"
    }
    else {
        return "Evenish"
    }

    
}

console.log(oddishOrEvenish(43)) //"Oddish"

console.log(oddishOrEvenish(373)) //"Oddish"

console.log(oddishOrEvenish(4433)) // "Evenish"

console.log(oddishOrEvenish(439897)) // "Evenish"

console.log(oddishOrEvenish(547576)) //"Evenish"

console.log(oddishOrEvenish(6773)) //"Oddish"