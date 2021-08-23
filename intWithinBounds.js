function intWithinBounds(n, lower, upper) {
	if (n >= lower && n < upper){
        return true
    }
    else {
        return false
    }
}


console.log(intWithinBounds(3, 1, 9)) //true

console.log(intWithinBounds(6, 1, 6)) //false

console.log(intWithinBounds(4.5, 3, 8)) //false

console.log(intWithinBounds(9, 1, 15)) //true

