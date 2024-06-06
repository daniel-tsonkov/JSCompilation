function solve(arr) {
    let newArr = [];
    let biggestNum = 0;

    // for (let index = 0; index < arr.length; index++) {
    //     let element = arr[index]; 

    //     if (biggestNum <= element) {
    //         newArr.push(element)
    //         biggestNum = element;
    //     }
    // }

    arr.forEach(element => {
        if (biggestNum <= element) {
            newArr.push(element)
            biggestNum = element;
        }
    });

    console.log(newArr);
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);