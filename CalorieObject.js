function solve(arr) {
    let obj = {};

    for (let index = 0; index < arr.length; index += 2) {
        const product = arr[index];
        let calorie = arr[index + 1];
        
        obj[product] = Number(calorie);
    }

    console.log(obj);
}

solve(['A', '1', 'B', '2', 'C', '3']);