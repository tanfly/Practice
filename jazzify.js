function jazzify(arr) {
	let jazzed = []
    if (arr.empty){
        return arr
    }
    else{
        for (let i = 0; i < arr.length; i++){
            if (arr[i].charAt(arr[i].length-1) === "7"){
                jazzed.push(arr[i])
            }
            else {
                jazzed.push(arr[i] + "7")
            }
        }
    }

    return jazzed
}

console.log(jazzify(["G", "F", "C"])) // ["G7", "F7", "C7"]

console.log(jazzify(["Dm", "G", "E", "A"])) // ["Dm7", "G7", "E7", "A7"]

console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])) // ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

console.log(jazzify([])) // []