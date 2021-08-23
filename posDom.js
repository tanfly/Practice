function isPositiveDominant(a) {

    let unique = []

    for (let i = 0; i < a.length; i++){
        if (!(unique.includes(a[i]))){
            unique.push(a[i])
        }
    }

    let count = 0
	for (let i = 0; i < unique.length; i++){
        if(unique[i] >= 0){
            count ++;
        }
    }
    
    if (count >= (a.length / 2)){
        return true
    }

    else {
        return false
    }
}


console.log(isPositiveDominant([1, 1, 1, 1, -3, -4])) //false

console.log(isPositiveDominant([5, 99, 832, -3, -4])) //true

console.log(isPositiveDominant([5, 0])) //true

console.log(isPositiveDominant([0, -4, -1])) //false