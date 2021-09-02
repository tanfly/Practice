function convert(deg) {

    let int = deg.slice(0, -2)

    let type = deg.slice(-1)

    if (type === "C"){
        let convert = Math.round(((int * 1.8) + 32))

        return `${convert}°F`
    }

    else if (type === "F"){
        let convert = Math.round(((int - 32) * 0.5556))

        return `${convert}°C`
    }

    else{
        return "Please enter degrees in 'n°F' or 'n°C' format"
    }
	
}


console.log(convert("35°C")) // "95°F"

console.log(convert("19°F")) // "-7°C"

console.log(convert("33")) // "Please enter degrees in "n°F" or "n°C" format"

