function charCount(char, str) {
	let stra = str.split("")
    let count = 0
    for(let i = 0; i < stra.length; i++){
        if (stra[i] === char){
            count += 1
        }
    }
    return count
}

console.log(charCount("b", "big fat bubble")) 