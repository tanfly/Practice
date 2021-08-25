let fullCart = [
    {product: "Milk", quantity: 1, price: 1.50 },
    {product: "Eggs", quantity: 12, price: 0.10 },
    {product: "Bread", quantity: 2, price: 1.60 },
    {product: "Cheese", quantity: 1, price: 4.50 },
    {product: "Yogurt", quantity: 3, price: 2.50}
  ]

  let junkFood = [
      {product: "Chips", quantity: 2, price: 3.50},
      {product: "Candy Bar", quantity: 1, price: 1.20},
      {product: "Licorice", quantity: 1, price: 2.00},
      {product: "Cola", quantity: 1, price: 1.50}
  ]

  let dinner = [
      {product: "Pasta", quantity: 1, price: 2.50},
      {product: "Sauce", quantity: 2, price: 3.00},
      {product: "Ground Beef", quantity: 1, price: 6.00},
      {product: "Garlic", quantity: 1, price: 0.75},
      {product: "Onion", quantity: 1, price: 1.34},
      {product: "Rosemary", quantity: 1, price: 2.00},
      {product: "Basil", quantity: 1, price: 1.50}
  ]

  let struggle = [
      {product: "Rice", quantity: 1, price: 1.99},
      {product: "Black Beans", quantity: 1, price: 2.20},
      {product: "Garlic", quantity: 1, price: 0.75},
      {product: "Onion", quantity: 1, price: 1.34}
  ]

function getTotalPrice(groceries) {
    let priceQuanArr = Object.keys(groceries).map(k => (groceries[k].price * groceries[k].quantity))

    const total = priceQuanArr.reduce((sum, currentValue) => {
        return sum + currentValue;
    }, 0);

    return total
    
}


console.log(getTotalPrice(fullCart)) // $17.90

console.log(getTotalPrice(junkFood)) // $11.70

console.log(getTotalPrice(dinner)) // $20.09

console.log(getTotalPrice(struggle)) // $6.28