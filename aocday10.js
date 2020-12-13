const fs = require('fs');
const filename = 'day10data.txt';
const joltages = fs.readFileSync(filename).toString().split('\n').map((val) => Number(val))

// part 1

const joltDiff = (joltages) => {
    joltages.sort((a, b)=> a-b)
    let one = 1
    let three = 1
    let i = 0
    let j = 1
    while( i < joltages.length) {
        if(joltages[j] - joltages[i] === 1) one++
        if(joltages[j] - joltages[i] === 3) three++
        i++
        j++
    }
    return one * three
}

console.log(joltDiff(joltages))

// part 2



