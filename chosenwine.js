let wines1 = [
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 }
  ]


  let wines2 = [{ name: "Wine A", price: 8.99 }]

  let wines3 = []

  let wines4 = [
      { name:"Wine A", price: 9.99},
      { name: "Wine 2", price: 8.99}
    ]

    let wines5 = [
        { name: "Noah Wine", price: 7.99},
        { name: "Stella Wine", price: 6.99},
        { name: "Tippi Wine", price: 10.99}
    ]



function chosenWine(wines) {
	let prices = Object.keys(wines).map(k => (wines[k].price))
    
    let sorted = prices.sort(function(a, b) {
        return a - b;
    });


    if (sorted[1]){
        let ans = wines.find(o => o.price === sorted[1]);
        return ans.name
    }

    else if (sorted[0] && !sorted[1]){
        let ans = wines.find(o => o.price === sorted[0]);
        return ans.name
    }

    else {
        return null
    }


}


console.log(chosenWine(wines1)) //"Wine 9"

console.log(chosenWine(wines2)) //"Wine A"

console.log(chosenWine(wines3)) //null

console.log(chosenWine(wines4)) //"Wine A"

console.log(chosenWine(wines5)) //"Noah Wine"