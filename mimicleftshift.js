function shiftToLeft(x, y) {
	let exp = Math.pow(2, y)

    return (x * exp)
}

console.log(shiftToLeft(46, 6))