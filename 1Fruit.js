function fruit(fruitName, weightInGrams, priceperKg) {
    let kilograms = weightInGrams / 1000;
    let price = kilograms * priceperKg;
    console.log(`I need $${price} to buy ${kilograms.toFixed(2)} kilograms ${fruitName}`, )
}

fruit('orange', 2500, 1.80)