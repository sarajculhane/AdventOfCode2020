const fs = require('fs');
const filename = 'day12data.txt';
const moves = fs.readFileSync(filename).toString().split('\n')

const dir = {
    'R90' : {
        'W' : 'N',
        'N': 'E',
        'E': 'S',
        'S' : 'W'


    },
    'L90' : {
        'N' : 'W',
        'E': 'N',
        'S': 'E',
        'W' : 'S'


    },
    '180': {
        'N': 'S',
        'E': 'W',
        'S' : 'N',
        'W' : 'E'
    }
}

// problem 1

const shipLocation = (dir, moves) => {

    let curDir = 'E'
    let eastWest = 0
    let northSouth = 0


    for(let i = 0; i < moves.length; i++) {
        
        let move = moves[i]
        
        if(move[0] === 'E') eastWest+= Number(move.slice(1, move.length))
        if(move[0] === 'W') eastWest-= Number(move.slice(1, move.length))
        if(move[0] === 'N') northSouth+= Number(move.slice(1, move.length))
        if(move[0] === 'S') northSouth-= Number(move.slice(1, move.length))

        if(move === 'R180' || move === 'L180') {
            curDir = dir['180'][curDir]
     }

        if(move === 'R90' || move === 'L270') {
            curDir = dir['R90'][curDir]
            
        }

        if(move === 'L90' || move === 'R270') {
            curDir = dir['L90'][curDir]
        }

        if(move[0] === 'F') {

            if(curDir === 'E') eastWest+= Number(move.slice(1, move.length))
            if(curDir === 'W') eastWest-= Number(move.slice(1, move.length))
            if(curDir === 'N') northSouth+= Number(move.slice(1, move.length))
            if(curDir === 'S') northSouth-= Number(move.slice(1, move.length))
        }

}
    
    return Math.abs(northSouth) + Math.abs(eastWest)

}


console.log(shipLocation(dir, moves))


// problem 2

const shipLocWaypoint = (dir, moves) => {
    const waypoint = [10, 1]
    let curDir = 'E'
    let eastWest = 0
    let northSouth = 0


    for(let i = 0; i < moves.length; i++) {
        
        let move = moves[i]
        const waypoint = [10, 1]
        if(move[0] === 'E') waypoint[0]+= Number(move.slice(1, move.length))
        if(move[0] === 'W') waypoint[0] -= Number(move.slice(1, move.length))
        if(move[0] === 'N') nwaypoint[1]+= Number(move.slice(1, move.length))
        if(move[0] === 'S') waypoint[1]-= Number(move.slice(1, move.length))

        if(move === 'R180' || move === 'L180') {
           if(dir['180'][curDir] === 'E' || dir['180'][curDir] === 'W' ) waypoint[0] = -waypoint[0]
           if(dir['180'][curDir] === 'S' || dir['180'][curDir] === 'N' ) waypoint[1] = -waypoint[1]
           

     }

        if(move === 'R90' || move === 'L270') {
            curDir = dir['R90'][curDir]
            
        }

        if(move === 'L90' || move === 'R270') {
            curDir = dir['L90'][curDir]
        }

        if(move[0] === 'F') {

            if(curDir === 'E') eastWest = eastWest + Number(move.slice(1, move.length))*waypoint[0]
            if(curDir === 'W') eastWest/= eastWest  - Number(move.slice(1, move.length))/waypoint[0]
            if(curDir === 'N') northSouth= northSouth +  Number(move.slice(1, move.length))*waypoint[1]
            if(curDir === 'S') northSouth= northSouth - Number(move.slice(1, move.length))/waypoint[1]
        }

}
    
    return Math.abs(northSouth) + Math.abs(eastWest)

}

console.log(shipLocWaypoint(dir, moves))