function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b));

    // for (let index = 0; index < arr.length; index++) { //another method
    //     console.log(`${index + 1}. ${arr[index]}`); 
    // }

    arr.forEach((е, index) => {
        console.log(`${index + 1}. ${е}`);
    });
}

solve(["John", "Bob", "Christina", "Ema"]);