function camelCase(str) {
	let regex = /[_\s]/g


    let spaces = str.replace(regex, ' ')

    let string = spaces.split(" ").join(' ')


    return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return "";
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      });

}


console.log(camelCase("Hello World")) // "helloWorld"

console.log(camelCase("snake_case")) // "snakeCase"

console.log(camelCase("low high_HIGH")) // "lowHighHigh"