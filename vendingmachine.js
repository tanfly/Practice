
let menu = {Cheetos : 150, Fritos : 150, Lays : 100, Snickers : 100, Peanuts : 75,
Gum : 50, Granola : 75, Mints : 25 }


function vendingmachine(change){
    let canAfford = []
    for (const [key, value] of Object.entries(menu)) {
        if (value <= change){
            canAfford.unshift(`You can afford ${key} with ${(change - value)} cents change remaining.`)
        }
        else {
            canAfford.push (`You cannot afford ${key}. You need ${(value - change)} cents more.`)
        }
      }
      return canAfford
}


console.log(vendingmachine(250))

console.log(vendingmachine(50))

console.log(vendingmachine(100))