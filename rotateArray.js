function solve(arr, num) {
    for (let index = 0; index < num; index++) {
        let myIndex = arr.pop();
        arr.unshift(myIndex);
    }

    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4'], 2)