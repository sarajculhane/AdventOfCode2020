const fs = require('fs');
const filename = 'day8data.txt';
const moves = fs.readFileSync(filename)
    .toString().split('\n').map((move) => move.split(' '))
// problem 1

const getAcc = (moves) => {
    let accumulator = 0
    let cur = 0
    const seen = new Set()
    for (let i = 0; i < moves.length; i++) {
        if(seen.has(cur)) {
            console.log(moves[i])
            return accumulator
        }
        seen.add(cur)

        if(moves[cur][0] === 'jmp') {
            if(moves[cur][1].slice(0,1) === '+') cur+= Number(moves[cur][1].slice(1))
            else cur-= Number(moves[cur][1].slice(1))
        } 
        else if (moves[cur][0] === 'acc') {
            if(moves[cur][1].slice(0,1) === '+') accumulator+= Number(moves[cur][1].slice(1))
            else accumulator-= Number(moves[cur][1].slice(1))
            cur++
        }
        else cur++
    }
    console.log(accumulator, cur)
    return accumulator
}

// problem 2 - INCOMPLETE
const terminate = (moves) => {
    let accumulator = 0
    let cur = 0
    let i = 0
    const seen = new Set()
    while( i < 1000) {
        console.log(cur)

        if(moves[cur][0] === 'jmp') {
            if(moves[cur][1].slice(0,1) === '+') cur+= Number(moves[cur][1].slice(1))
            else cur-= Number(moves[cur][1].slice(1))
        } 
        else if (moves[cur][0] === 'acc') {
            if(moves[cur][1].slice(0,1) === '+') accumulator+= Number(moves[cur][1].slice(1))
            else accumulator-= Number(moves[cur][1].slice(1))
            cur++
        }
        else cur++

        i++
    }
    return accumulator

}
console.log( terminate(moves), moves.length)