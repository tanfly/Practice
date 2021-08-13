let seven = /[7]/g

function sevenBoom(arr) {
    let string = arr.toString()

    let search = string.match(seven)
    
    if (search == null){
        return "There is no 7 in the array"
    }
    else{
        return "Boom!"
    }
    
    
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])) // Boom!

console.log(sevenBoom([8, 6, 33, 100])) // There is no 7 in the array

console.log(sevenBoom([2, 55, 60, 97, 86])) // Boom!

console.log(sevenBoom([39854, 993245, 290345, 1234567])) // Boom!

console.log(sevenBoom([39854, 993245, 290345, 123456])) // There is no 7 in the array