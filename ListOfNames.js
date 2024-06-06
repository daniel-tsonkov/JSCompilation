function solve(arr) {
    let newArr = [];
    let biggestNum = 0;

    const sortedWords = arr.sort();

    for (let index = 0; index < arr.length; index++) {
        console.log(`${index}. ${sortedWords[index]}`); 
    }
 
}

solve(['John', 'Bob', 'Christina', 'Ema']);