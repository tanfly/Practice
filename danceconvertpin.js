const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function danceConvert(pin) {
    let movesObj = {}

    MOVES.map((MOVE, index) => {
            movesObj[index] = MOVE
        });

    let toSt = pin.toString()
    let pinArr = toSt.split('')

    let pinTotal = []

    pinArr.map((num, index) => {
        pinTotal.push((parseInt(index))  + (parseInt(num)))
    })

    let pinMove = []

    for (let i = 0; i < pinTotal.length; i++){
        if (pinTotal[i] <= 9){
            for (const [key, value] of Object.entries(movesObj)) {
                if (parseInt(key) == pinTotal[i]){
                    pinMove.push(value)
                }
            }
        }

        else if (pinTotal[i] > 9){
            let newString = pinTotal[i].toString()
            let newInd = newString.split('')
            for (const [key, value] of Object.entries(movesObj)) {
                if (parseInt(key) == parseInt(newInd[1])){
                    pinMove.push(value)
                }
            }
        }

        else if (pinTotal.includes(NaN)){
            return "Invalid Input"
        }
    }

    return pinMove
}

console.log(danceConvert("0000")) // ["Shimmy", "Shake", "Pirouette", "Slide"]

console.log(danceConvert("3856")) // [ "Slide", "Arabesque", "Pop", "Arabesque" ]

console.log(danceConvert("9999")) // [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]

console.log(danceConvert("32a1")) // "Invalid Input"