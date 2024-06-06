function solve(arr, step) {
    return arr.filter((element, index) => index % step == 0)
}

console.log(solve(['1', '2', '3', '4', '5', '6 '], 3));