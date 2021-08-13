
const indvWords = /\b\w+\W|\b\w+\b/g

function emphasise(str) {
	let words = str.match(indvWords)
    let capArr = []
    
    for (let i = 0; i < words.length; i++){
        capArr.push(words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase())
    }

    return capArr.join(" ")
}

console.log(emphasise("hello world"))

console.log(emphasise("GOOD MORNING"))

console.log(emphasise("99 red balloons!"))

console.log(emphasise("MUrdEr in THe rUe moRGUe!"))
