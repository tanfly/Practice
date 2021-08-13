function countTrue(arr) {
    let count = 0
	for (let i = 0; i < arr.length; i++){
        if (arr[i] === true){
            count += 1
        }
        else if (arr.empty) {
            return 0
        }
    }
    return count
}

console.log(countTrue([true, false, false, true, false]))

console.log(countTrue([false, false, false, false]))

console.log(countTrue([]))