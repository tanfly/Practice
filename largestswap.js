function largestswap(n){
    let str = (n).toString()

    let n1 = str[0]
    let n2 = str[1]

    if (n1 > n2){
        return false
    }

    else if (n1 < n2){
        return true
    }

    else {
        return "The numbers are equal"
    }
}

console.log(largestswap(43))