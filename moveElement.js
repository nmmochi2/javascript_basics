const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 3);
console.log(output);

function move(list, index, offset) {
    const output = [...list];

    const newIndex = (index + offset) % list.length;

    const element = output.splice(index, 1)[0];
    output.splice(newIndex, 0, element);
    
    return output;
}