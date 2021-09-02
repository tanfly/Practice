function calculateScore(games) {

    let winArr = []

	games.forEach(game => {
        let noah = game[0]
        let stella = game[1]


        if (noah === "R"){
            switch (stella){
                case "R":
                    winArr.push("Tie")
                    break;
                case "P":
                    winArr.push("Stella")
                    break;
                case "S":
                    winArr.push("Noah")
                    break;
            };
        }
        else if (noah === "P"){
            switch (stella){
                case "R":
                    winArr.push("Noah")
                    break;
                case "P":
                    winArr.push("Tie")
                    break;
                case "S":
                    winArr.push("Stella")
                    break;
            }
        }

        else if (noah === "S"){
            switch (stella){
                case "R":
                    winArr.push("Stella")
                    break;
                case "P":
                    winArr.push("Noah")
                    break;
                case "S":
                    winArr.push("Tie")
                    break;
            }
        }
    })
    
    let noah = 0
    let stella = 0
    let tie = 0

    for (let i = 0; i < winArr.length; i++){
        switch (winArr[i]){
            case "Noah":
                noah++
                break;
            case "Stella":
                stella++
                break;
            case "Tie":
                tie++
                break;
        }
    }
    
    if (noah > stella && noah > tie){
        return "Noah Wins!"
    }

    else if (stella > noah && stella > tie){
        return "Stella Wins!"
    }

    else if (tie > noah && tie > stella || tie === noah && tie === stella){
        return "Tie!"
    }

    else{
        return `Uh-oh, something is wrong here!, noah is ${noah}, stella is ${stella}, tie is ${tie}`
    }
}

console.log(calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]))

console.log(calculateScore([["R", "R"], ["S", "S"]]))

console.log(calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]))

