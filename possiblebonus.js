//Only evaluating for player A (tile A)
//Given tile # of B, is it possible for A to roll on 1-6 dice and get same tile number
function possibleBonus(tilea, tileb){
    if (tileb - tilea <= 6 && tileb - tilea > 0){
        return true
    }
    else {
        return false
    }

}


console.log(possibleBonus(3, 7)) //true

console.log(possibleBonus(1, 9)) //false

console.log(possibleBonus(5, 3)) //false