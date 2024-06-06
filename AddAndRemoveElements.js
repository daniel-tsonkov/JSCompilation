function solve(arr) {
    let newArr = [];
    let num = 0;

    for (let index = 0; index < arr.length; index++) {
        num++;
        let command = arr[index];
        console.log(command);

        switch (command) {
            case 'add':
                newArr.push(num);
                break;

            case 'remove':
                newArr.pop();
                break;
        }
        // if(command == "add") {
        //     newArr.push(num);
        // } else if(command == 'remove') {
        //     newArr.pop();
        // }
    }

    if (newArr.length == 0) {
        console.log('empty');
    } else {
        console.log(newArr.join('\n'));

    }
}

solve(['add', 'add', 'remove', 'add', 'add']);