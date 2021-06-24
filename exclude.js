const numbers = [1, 2, 3, 4, 1, 1];
const exclude = [1, 4];

const output = except(numbers, exclude);
console.log(output);

function except(list, excludeList) {
    const output = [];
    
    for (let item of list)
        if (!excludeList.includes(item))
            output.push(item);
    
    return output;
}