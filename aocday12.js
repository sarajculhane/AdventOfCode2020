const fs = require('fs');
const filename = 'day11data.txt';
const moves = fs.readFileSync(filename).toString().split('\n')

const shipLocation = (moves) => {
    const dir = {
        'E': 1,
        'W': -1,
        'S': -1,
        'N' : 1

    }
    let curDirection = 'E'
    let eastWest = 0
    let northSouth = 0


    for(let i = 0; i < moves.length; i++) {
        let moves = moves[i]
        if(move[0] === 'E') eastWest+= Number(move.slice(1, move.length))
        if(move[0] === 'W') eastWest-= Number(move.slice(1, move.length))
        if(move[0] === 'N') nortSouth+= Number(move.slice(1, move.length))
        if(move[0] === 'S') northSouth-= Number(move.slice(1, move.length))

        if(move[0] === )
    }
}