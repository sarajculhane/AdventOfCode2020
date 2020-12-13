const fs = require('fs');
const filename = 'day11data.txt';
const seats = fs.readFileSync(filename).toString().split('\n')

const checkPos = (state, i, j) => {
    let count = 0
    if(state[`${i-1} ${j}`] === '#') count++
    if(state[`${i+1} ${j}`] === '#') count++
    if(state[`${i} ${j-1}`] === '#') count++
    if(state[`${i} ${j+1}`] === '#') count++
    if(state[`${i+1} ${j+1}`] === '#') count++
    if(state[`${i-1} ${j-1}`] === '#') count++
    if(state[`${i+1} ${j-1}`] === '#') count++
    if(state[`${i-1} ${j+1}`] === '#') count++

    if(count >= 4) return true
    else if(count === 0) return false
    else return null
}

/*
[0, 0] [0, 1] [0, 2] [0, 3]

[1, 0] [1, 1] [1, 2] [1, 3]

[2, 0] [2, 1] [2, 2] [2, 3]

[3, 0] [3, 1] [3, 2] [3, 3]

deltas (-1, 0) (+1, 0) (0, -1) (0, +1) (+1, +1) (-1, -1) (-1, 1) (1, -1)
*/

const getInitial = (seats) => {
    const state = {}
    const countOcc = 0
    for(let i = 0 ; i < seats.length; i++) {
        for(let j = 0; j < seats.length ; j++) {
            if(seats[i][j] === 'L') state[`${i} ${j}`] = '#'

        }

    }
    return state
}

const initialState = getInitial(seats)
// console.log(getInitial(seats))

const countOccupied = (state, seats, initialCount) => {
    let count = 0
    count+=initialCount
    
    for(let i = 0 ; i < seats.length; i++) {
        for(let j = 0; j < seats.length ; j++) {
            if(state[`${i} ${j}`] === '#' && checkPos(state, i, j) === true) {
                state[`${i} ${j}`] = 'L'
                count--
            }
           else if(state[`${i} ${j}`] === 'L' && checkPos(state, i, j) === false) {
                state[`${i} ${j}`] = '#'
                count++
            }
            
        }


    
    }
    console.log(count, Object.values(state).filter((val) => val === '#').length)
    if(count ===  initialCount) return count
    else return countOccupied(state, seats, count)
}

console.log(countOccupied(initialState,seats, 0))