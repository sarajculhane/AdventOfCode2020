const fs = require('fs');
const filename = 'day9data.txt';
const values = fs.readFileSync(filename).toString().split('\n').map((val) => Number(val))


const getPossibleSums = (values) => {
    const sumSet = new Set()
    for(let i = 0; i < values.length; i++) {
        for(let j = i + 1; j < values.length; j++) {
            sumSet.add(values[i] + values[j])
    }
    }
    return sumSet
}

const checkSums = (values) => {
    let i = 0
    let j = 25

    let curr = values.slice(i, j)
    let val = values[j]
    let sums = getPossibleSums(curr)
    while(curr.length) {
        if(!curr.includes(val) && sums.has(val)) {
            j++
            i++
            curr = values.slice(i, j)
            val = values[j]
            sums = getPossibleSums(curr)

        } else return val
    
        
        
    }
    
}

console.log(checkSums(values))